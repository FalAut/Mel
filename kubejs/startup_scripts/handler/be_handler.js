global.AncientAuraGenerator = (/**@type {Internal.BlockEntityJS} */ be) => {
    const AURA_OUTPUT = 10000;
    const { level, blockPos } = be;
    if (!$PatchouliAPI.getMultiblock("mel:ancient_aura_generator").validate(level, blockPos, "none")) return;

    const chunkAuraCap = level.getChunkAt(blockPos).getCapability($NaturesAuraAPI.CAP_AURA_CHUNK).resolve().get();
    const aura = chunkAuraCap.getAuraInArea(level, blockPos, 35);
    const below = level.getBlock(blockPos.below());
    const coords = getCoordsToPut(level, blockPos, 3, (state) => state.block instanceof $LeavesBlock);

    if (coords) {
        if (below != "naturesaura:generator_limit_remover") {
            if (aura + AURA_OUTPUT >= 2000000) return;
            chunkAuraCap.storeAura(blockPos, AURA_OUTPUT);
        } else {
            chunkAuraCap.storeAura(blockPos, AURA_OUTPUT * 2);
        }

        level.destroyBlock(coords, false);

        $NaturesAuraAPI
            .instance()
            .spawnMagicParticle(coords.x + 0.5, coords.y + 1, coords.z + 0.5, 0, 0, 0, 0x9acd32, 5, 40, 0, false, true);
    }
};

global.SourceFluidLink = (/**@type {Internal.BlockEntityJS} */ be) => {
    const { block, level } = be;
    const tank = block.up;

    if (tank.id == "wizards_reborn:orbital_fluid_retainer") {
        const tankCap = tank.entity.getCapability(ForgeCapabilities.FLUID_HANDLER).resolve().get();
        const fluidInTank = tankCap.getFluidInTank(0).amount;
        const tankCapacity = tankCap.getTankCapacity(0);

        if (fluidInTank < tankCapacity && $SourceUtil.takeSourceWithParticles(tank.pos, level, 6, 1000) != null) {
            tankCap.fill(Fluid.of("mel:liquid_source", 100), "execute");
        }
    }
};

const POSITIONS = [
    [-1, 0, -1],
    [-1, 0, 0],
    [-1, 0, 1],
    [0, 0, 1],
    [1, 0, 1],
    [1, 0, 0],
    [1, 0, -1],
    [0, 0, -1],
];

const RECIPES = [
    { input: "botania:shimmerrock", output: "ars_nouveau:sourcestone", cost: 100, time: 60 },
    { input: "mel:mana_string_block", output: "ars_nouveau:magebloom_block", cost: 300, time: 80 },
];

global.sourceFlower = (/**@type {Internal.BlockEntityJS} */ be) => {
    const { block, level, tick } = be;

    POSITIONS.forEach(([dx, dy, dz]) => {
        let targetPos = block.pos.offset(dx, dy, dz);
        if (level.getBlockState(targetPos).isAir()) return;

        const { x, y, z } = targetPos;
        const targetBlock = level.getBlock(targetPos);
        const timerKey = `conversionTimer_${x}_${y}_${z}`;
        const recipeKey = `currentRecipe_${x}_${y}_${z}`;

        let source = be.persistentData.getInt("source");
        let conversionTimer = be.persistentData.getInt(timerKey);
        let currentRecipeIndex = be.persistentData.getInt(recipeKey);

        let matchedRecipe = null;
        for (let i = 0; i < RECIPES.length; i++) {
            if (targetBlock == RECIPES[i].input) {
                matchedRecipe = RECIPES[i];
                if (i != currentRecipeIndex) {
                    conversionTimer = 0;
                    currentRecipeIndex = i;
                    be.persistentData.putInt(recipeKey, currentRecipeIndex);
                }
                break;
            }
        }

        if (matchedRecipe && source >= matchedRecipe.cost) {
            conversionTimer++;
            be.persistentData.putInt(timerKey, conversionTimer);

            if (conversionTimer >= matchedRecipe.time) {
                level.destroyBlock(targetPos, false);
                level.setBlock(targetPos, Block.getBlock(matchedRecipe.output).defaultBlockState(), 11);
                source -= matchedRecipe.cost;
                be.persistentData.putInt("source", source);
                be.persistentData.putInt(timerKey, 0);
            }
        } else if (!matchedRecipe) {
            be.persistentData.putInt(timerKey, 0);
            be.persistentData.putInt(recipeKey, -1);
        }
    });

    if (be.persistentData.getInt("source") < 10000 && tick % 20 == 0) {
        if ($SourceUtil.takeSourceWithParticles(block.pos, level, 6, 1000) != null) {
            let source = be.persistentData.getInt("source");
            source += 1000;
            be.persistentData.putInt("source", source);
        }
    }
};

ForgeEvents.onEvent("net.minecraftforge.event.level.BlockEvent$NeighborNotifyEvent", (event) => {
    const { pos, level } = event;
    let blockState = level.getBlockState(pos.above());

    if (blockState == Block.getBlock("mel:source_flower").defaultBlockState()) {
        level.destroyBlock(pos.above(), true);
    }
});
