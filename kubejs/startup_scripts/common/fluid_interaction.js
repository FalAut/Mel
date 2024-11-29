StartupEvents.postInit((event) => {
    let $FluidInteractionRegistry = Java.loadClass("net.minecraftforge.fluids.FluidInteractionRegistry");
    let II = Java.loadClass("net.minecraftforge.fluids.FluidInteractionRegistry$InteractionInformation").__javaObject__;
    let FI = Java.loadClass("net.minecraftforge.fluids.FluidInteractionRegistry$FluidInteraction").__javaObject__;
    let HI = Java.loadClass("net.minecraftforge.fluids.FluidInteractionRegistry$HasFluidInteraction").__javaObject__;
    let context = $KubeJS.getStartupScriptManager().context;

    /**
     * @param {Internal.FluidType_} fluidType
     * @param {(level: Internal.Level_, currentPos: BlockPos_, relativePos: BlockPos_, currentState: Internal.FluidState_) => boolean} hasFluidInteration
     * @param {(level: Internal.Level_, currentPos: BlockPos_, relativePos: BlockPos_, currentState: Internal.FluidState_) => void} fluidInteration
     */
    function registerFluidInteraction(fluidType, hasFluidInteration, fluidInteration) {
        $FluidInteractionRegistry.addInteraction(
            fluidType,
            II.getConstructor(HI, FI).newInstance(
                $Context.jsToJava(context, hasFluidInteration, HI),
                $Context.jsToJava(context, fluidInteration, FI)
            )
        );
    }

    /**
     * @param {Special.Block} outputBlock
     * @param {Special.Block} inputBlock
     * @param {Internal.Fluid_} fluid
     */
    function blockGen(outputBlock, inputBlock, fluid) {
        registerFluidInteraction(
            Fluid.of(fluid).fluid.fluidType,
            (level, currentPos, relativePos, currentState) => {
                const directions = [
                    currentPos.north(),
                    currentPos.south(),
                    currentPos.east(),
                    currentPos.west(),
                    currentPos.below(),
                ];

                for (let direction of directions) {
                    if (level.getBlockState(direction).is(Block.getBlock(inputBlock))) {
                        return true;
                    }
                }
                return false;
            },
            (level, currentPos, relativePos, currentState) => {
                level.setBlockAndUpdate(currentPos, Block.getBlock(outputBlock).defaultBlockState());
            }
        );
    }

    blockGen("iron_ore", "iron_block", "mel:gensousitu");
    blockGen("gold_ore", "gold_block", "mel:gensousitu");
    blockGen("diamond_ore", "diamond_block", "mel:gensousitu");
    blockGen("lapis_ore", "lapis_block", "mel:gensousitu");
    blockGen("emerald_ore", "emerald_block", "mel:gensousitu");
    blockGen("coal_ore", "coal_block", "mel:gensousitu");
    blockGen("redstone_ore", "redstone_block", "mel:gensousitu");
    blockGen("copper_ore", "copper_block", "mel:gensousitu");
    blockGen("copper_ore", "exposed_copper", "mel:gensousitu");
    blockGen("copper_ore", "weathered_copper", "mel:gensousitu");
    blockGen("copper_ore", "oxidized_copper", "mel:gensousitu");
    blockGen("ancient_debris", "netherite_block", "mel:gensousitu");
});
