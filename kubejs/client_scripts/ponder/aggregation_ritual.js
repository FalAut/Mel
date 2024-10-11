Ponder.registry((event) => {
    event
        .create("mel:aggregation_sigil")
        .scene("aggregation_ritual", "聚合仪式", "mel:aggregation_ritual", (scene, util) => {
            scene.showStructure();

            let sigil = scene.world.createItemEntity([3.5, 4, 3.5], [0, 0, 0], "mel:aggregation_sigil");
            scene.idle(40);

            scene.world.createEntity("falling_block", [3.5, 5, 3.5], (entity) => {
                entity.mergeNbt({ BlockState: { Name: "minecraft:anvil" } });
            });
            scene.idle(12);

            scene.world.removeEntity(sigil);

            scene.world.createEntity("item", [3.5, 5, 3.5], (entity) => {
                entity.mergeNbt({
                    Item: {
                        Count: 1,
                        id: "mel:aggregation_sigil",
                        tag: { Enchantments: [{ id: "mel:activate", lvl: 1 }] },
                    },
                    NoGravity: 1,
                });
            });

            scene.world.setBlocks(
                [1, 1, 1, 5, 1, 5],
                Block.getBlock("botania:infused_grass").defaultBlockState(),
                true
            );

            scene.world.setBlocks(
                [2, 2, 2, 2, 2, 4],
                Blocks.REDSTONE_WIRE.defaultBlockState().setValue(BlockProperties.POWER, new $Integer("15")),
                false
            );

            scene.world.setBlocks(
                [4, 2, 2, 4, 2, 4],
                Blocks.REDSTONE_WIRE.defaultBlockState().setValue(BlockProperties.POWER, new $Integer("15")),
                false
            );

            scene.world.setBlock(
                [3, 2, 2],
                Blocks.REDSTONE_WIRE.defaultBlockState().setValue(BlockProperties.POWER, new $Integer("15")),
                false
            );

            scene.world.setBlock(
                [3, 2, 4],
                Blocks.REDSTONE_WIRE.defaultBlockState().setValue(BlockProperties.POWER, new $Integer("15")),
                false
            );
        });
});
