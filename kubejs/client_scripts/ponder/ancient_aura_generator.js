Ponder.registry((event) => {
    event
        .create("mel:ancient_aura_generator_core")
        .scene("ancient_aura_generator", "灵气制造", "mel:ancient_aura_generator", (scene, util) => {
            scene.setSceneOffsetY(-1);
            scene.scaleSceneView(0.8);
            scene.showStructure();

            scene.idle(20);
            scene.text(40, "在以核心半径3格范围内放置树叶");
            scene.world.setBlock([3, 4, 2], Blocks.OAK_LEAVES.defaultBlockState(), false);

            scene.idle(40);
            scene.text(40, "树叶会被核心吸收，从而转化为灵气");
            scene.world.destroyBlock([3, 4, 2]);
        });
});
