// 坩埚
BlockEvents.rightClicked((event) => {
    handleCrucibleInteraction(event, "mel:oak_crucible", "leaves", "water");
    handleCrucibleInteraction(event, "mel:fired_crucible", "mel:fired_crucible_fuel", "lava");
});

// 堆肥桶
BlockEvents.rightClicked("composter", (event) => {
    const { block, hand } = event;
    if (hand != "MAIN_HAND") return;

    const compostLevel = block.blockState.getValue(BlockProperties.LEVEL_COMPOSTER);

    if (compostLevel == 8) {
        block.popItemFromFace("7x bone_meal", "up");
    }
});

BlockEvents.rightClicked((event) => {
    const { hand, level, block, item, player, server } = event;
    if (hand != "MAIN_HAND") return;

    let dreamTree = $PatchouliAPI.getMultiblock("mel:first_tree");

    if (dreamTree.validate(level, block.pos, "none")) {
        dreamTree
            .simulate(level, block.pos, "none", false)
            .second.forEach((result) => level.destroyBlock(result.worldPosition, false));
        block.popItemFromFace("oak_sapling", "up");
        player.swing();
    }

    if (item == "mel:source_flower") {
        if (!block.hasTag("minecraft:dirt")) {
            player.inventoryMenu.broadcastFullState();
            event.cancel();
        }
    }

    let curiosInventory = $CuriosApi.getCuriosInventory(player).resolve().get();
    let foundThirdEye = curiosInventory.equippedCurios.allItems.some((item) => item == "botania:third_eye");
    const structureTemplate = server.structureManager.get("mel:demons_dream").get();
    let otherworld = server.getLevel("mel:otherworld");

    if (level.dimension == "minecraft:the_nether" && block.hasTag("minecraft:beds") && foundThirdEye) {
        structureTemplate.placeInWorld(
            otherworld,
            block.pos,
            block.pos,
            new $StructurePlaceSettings(),
            level.random,
            2
        );
        player.teleportTo("mel:otherworld", block.pos.x + 2, block.pos.y + 2, block.pos.z + 2, 0, 0);
        player.potionEffects.add("darkness", 100);
        player.potionEffects.add("nausea", 200);
    }
});

BlockEvents.rightClicked("mel:colossal_furnace_core", (event) => {
    const { block, player, item, level } = event;
    if (item != "mel:colossal_furnace_proxy") return;

    let controller = $IMultiController.ofController(level, block.pos).orElse(null);

    if (controller != null && item.count >= 26) {
        controller.getPattern().autoBuild(player, new $MultiblockState(level, block.pos));
    }
});
