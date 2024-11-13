LycheeEvents.customAction("add_solar", (event) => {
    event.action.applyFunc = (recipe, ctx, times) => {
        let itemEntity = ctx.getParam("this_entity");
        let amount = itemEntity.nbt.Item.tag.Solar;
        if (amount >= 100) return;

        itemEntity.mergeNbt({
            Item: {
                Count: 1,
                id: "mel:sun_crystal",
                tag: {
                    Solar: amount + 1,
                },
            },
        });
    };
});

LycheeEvents.customAction("place_misty_forest_portal", (event) => {
    event.action.applyFunc = (recipe, ctx, times) => {
        let itemEntity = ctx.getParam("this_entity");
        const { level, block } = itemEntity;

        $PortalPlacer.attemptPortalLight(level, block.pos, $PortalIgnitionSource.ItemUseSource("barrier"));
        let lightningBoltEntity = block.createEntity("lightning_bolt");

        lightningBoltEntity.setVisualOnly(true);
        lightningBoltEntity.moveTo(Vec3d.atCenterOf(block.pos));
        lightningBoltEntity.spawn();
    };
});

LycheeEvents.customAction("addition_sigil_activation", (event) => {
    event.action.applyFunc = (recipe, ctx, times) => {
        let itemEntity = ctx.getParam("this_entity");
        const { level, block } = itemEntity;

        const resultEntity = block.createEntity("item");
        resultEntity.item = Item.of("mel:addition_sigil").enchant("mel:activate", 1);
        resultEntity.moveTo(Vec3d.atCenterOf(block.pos.above()));
        resultEntity.setDeltaMovement(new Vec3d(0, 0.01, 0));
        resultEntity.setNoGravity(true);
        resultEntity.setGlowing(true);
        resultEntity.spawn();

        level.broadcastEntityEvent(resultEntity, 35);

        const multiblock = $PatchouliAPI.getMultiblock("mel:addition_sigil_activation_ritual");
        multiblock.simulate(level, block.pos.below(), "none", false).second.forEach((result) => {
            if (result.character == "A") {
                level.setBlock(
                    result.worldPosition.below(),
                    Block.getBlock("botania:infused_grass").defaultBlockState(),
                    2
                );
            }
            if (result.character == "B") {
                level.setBlock(
                    result.worldPosition.above(),
                    Blocks.REDSTONE_WIRE.defaultBlockState().setValue(BlockProperties.POWER, new $Integer("15")),
                    2
                );
            }
        });

        const lightningBoltEntity = block.createEntity("lightning_bolt");
        lightningBoltEntity.setVisualOnly(true);
        lightningBoltEntity.moveTo(Vec3d.atCenterOf(block.pos));
        lightningBoltEntity.spawn();
    };
});
