JEIAddedEvents.registerCategories((event) => {
    event.custom("mel:beacon_convert", (category) => {
        let jeiHelpers = category.getJeiHelpers();
        let guiHelper = jeiHelpers.getGuiHelper();

        category
            .title(Text.translate("jei.mel.category.beacon_convert"))
            .background(guiHelper.createBlankDrawable(145, 95))
            .icon(guiHelper.createDrawableItemStack("minecraft:beacon"))
            .handleLookup((layOut, recipe, focuses) => {
                global.slot(layOut, recipe);
            })
            .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
                global.asd(guiHelper, guiGraphics);
            });
    });
});

JEIAddedEvents.registerRecipes((event) => {
    event.custom("mel:beacon_convert").add({ output: "minecraft:nether_star", input: "mel:empty_nether_star" });
});

global.slot = (layOut, recipe) => {
    layOut.addSlot("INPUT", 31, 21).addItemStack(recipe.data.input);
    layOut.addSlot("OUTPUT", 90, 26).addItemStack(recipe.data.output);
};

global.asd = (guiHelper, guiGraphics) => {
    let bufferSource = guiGraphics.bufferSource();
    let pose = guiGraphics.pose();

    let overlay = guiHelper.createDrawable("botania:textures/gui/pure_daisy_overlay.png", 0, 0, 64, 44);
    $RenderSystem.enableBlend();
    overlay.draw(guiGraphics, 38, 10);
    $RenderSystem.disableBlend();

    // 信标
    pose.pushPose();
    pose.translate(65, 90, 128);
    pose.scale(16, 16, 16);
    pose.mulPose(new Quaternionf().rotationYXZ(30 * DEG_TO_RAD, 180 * DEG_TO_RAD, 0));
    Client.blockRenderer.renderSingleBlock(
        Blocks.BEACON.defaultBlockState(),
        pose,
        bufferSource,
        FULL_BRIGHT,
        NO_OVERLAY
    );
    pose.popPose();

    // 信标光束
    pose.pushPose();
    pose.translate(62, 0, 0);
    pose.scale(12, 20, 12);
    Client.getBlockRenderer();
    $BeaconRenderer.renderBeaconBeam(
        pose,
        bufferSource,
        "textures/entity/beacon_beam.png",
        Client.partialTick,
        1,
        Client.level.time,
        -0.8,
        4,
        [12, 12, 12],
        0.35,
        0.25
    );

    // $BeaconRenderer.renderBeaconBeam(
    //     /*poseStack=*/ pose,
    //     /*bufferSource=*/ bufferSource,
    //     /*beamLocation=*/ "textures/entity/beacon_beam.png",
    //     /*partialTick=*/ Client.partialTick,
    //     /*textureScale=*/ 200,
    //     /*gameTime=*/ Client.frameTime,
    //     /*yOffset=*/ 1,
    //     /*height=*/ 3,
    //     /*colors=*/ [0.3, 0.4, 0.2],
    //     /*beamRadius=*/ 0.25,
    //     /*glowRadius=*/ 0.25
    // );

    pose.popPose();

    bufferSource.endBatch();
};
