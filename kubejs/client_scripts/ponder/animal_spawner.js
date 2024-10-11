Ponder.registry((event) => {
    event
        .create("naturesaura:animal_spawner")
        .scene("animal_spawner", "降生祭坛", "mel:animal_spawner", (scene, util) => {
            scene.showStructure();

            let item1 = scene.world.createItemEntity([2.5, 5, 3], [0, 0, 0], "naturesaura:birth_spirit");
            let item2 = scene.world.createItemEntity([2, 5, 3.5], [0, 0, 0], "naturesaura:token_anger");
            let item3 = scene.world.createItemEntity([2.5, 5, 3.5], [0, 0, 0], "minecraft:orange_dye");
            scene.idle(40);

            scene.world.removeEntity(item1);
            scene.world.removeEntity(item2);
            scene.world.removeEntity(item3);
            scene.idle(20);

            scene.world.createEntity("blaze", [2, 2, 3]);
        });
});
