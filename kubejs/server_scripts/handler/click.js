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
