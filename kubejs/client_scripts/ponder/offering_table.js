Ponder.registry((event) => {
    const flowers = [
        [
            "  aaaaa  ",
            " a     a ",
            "a  aaa  a",
            "a a   a a",
            "a a   a a",
            "a a   a a",
            "a  aaa  a",
            " a     a ",
            "  aaaaa  ",
        ],
    ];

    event
        .create("naturesaura:offering_table")
        .scene("offering_table", "祭祀台", "mel:offering_table", (scene, util) => {
            scene.scaleSceneView(0.8);
            scene.showStructure();

            for (let z = 0; z < 9; z++) {
                for (let x = 0; x < 9; x++) {
                    let block = flowers[0][z][x];

                    if (block == "a") scene.world.setBlock([x, 1, z], "poppy", false);
                }
            }

            scene.world.setBlock([4, 1, 4], "naturesaura:offering_table", false);
            scene.idle(10);

            scene.text(20, "test1").attachKeyFrame();
            scene.showControls(10, [4, 2.3, 4], "left").rightClick().withItem("naturesaura:infused_iron");
            scene.idle(10);

            scene.world.modifyBlockEntityNBT([4, 1, 4], (nbt) => {
                nbt.items = {
                    Items: [{ Count: 16, id: "naturesaura:infused_iron" }],
                };
            });
            scene.idle(20);

            scene.text(20, "test").attachKeyFrame();
            let startItem = scene.world.createItemEntity([4.5, 3, 4.5], [0, 0, 0], "naturesaura:calling_spirit");
            scene.idle(20);

            scene.world.createEntity("lightning_bolt", [4, 2, 4]);

            scene.text(20, "test").attachKeyFrame();
            scene.world.removeEntity(startItem);
            scene.world.modifyBlockEntityNBT([4, 1, 4], (nbt) => {
                nbt.items = {
                    Items: [{}],
                };
            });
            scene.idle(20);

            scene.text(20, "test").attachKeyFrame();
            for (let i = 0; i < 16; i++) {
                let x = 4 + (Math.random() * 2 - 1) * 4;
                let y = 15;
                let z = 4 + (Math.random() * 2 - 1) * 4;
                scene.world.createItemEntity([x, y, z], [0, 0, 0], "naturesaura:sky_ingot");
            }
        });
});
