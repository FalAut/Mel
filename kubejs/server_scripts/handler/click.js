BlockEvents.rightClicked((event) => {
    const { hand, level, block, item, player, server } = event;
    if (hand != "MAIN_HAND") return;

    if (block == "mel:aura_grinder" || block == "mel:engraving_table") {
        let auraAmount = $NaturesAuraAPI.instance().getAuraInArea(level, block.pos, 16);
        CustomMachine.of(block).data.aura_amount = auraAmount;
    }

    if (item == "mel:source_flower") {
        if (!block.hasTag("minecraft:dirt")) {
            player.inventoryMenu.broadcastFullState();
            event.cancel();
        }
    }

    if (item == "mel:dream_star") {
        let multiblock = $PatchouliAPI.getMultiblock("mel:dream_tree");

        if (multiblock.validate(level, block.pos, "none")) {
            multiblock
                .simulate(level, block.pos, "none", false)
                .second.forEach((result) => level.destroyBlock(result.worldPosition, false));
            block.popItemFromFace("oak_sapling", "up");
            item.count--;
            player.swing();
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

ItemEvents.rightClicked((event) => {
    const { hand, item, player } = event;
    const { x, y, z } = player.blockPosition();
    if (hand != "MAIN_HAND") return;

    const myGiftItems = [
        "iron_ingot",
        "gold_ingot",
        "diamond",
        "redstone",
        "lapis_lazuli",
        "emerald",
        "coal",
        "copper_ingot",
    ];

    if (item == "mel:my_gift") {
        for (let myGiftItem of myGiftItems) {
            player.give(Item.of(myGiftItem, 9));
        }
        item.count--;
    }

    if (item == "mel:dream_lantern") {
        const { x, y, z } = player.respawnPosition;
        player.teleportTo("minecraft:overworld", x, y, z, 0, 0);
        player.swing();
    }
});
