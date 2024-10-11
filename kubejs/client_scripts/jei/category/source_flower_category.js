JEIAddedEvents.registerCategories((event) => {
    event.custom("mel:source_flower", (category) => {
        let jeiHelpers = category.getJeiHelpers();
        let guiHelper = jeiHelpers.getGuiHelper();

        category
            .title(Text.translate("block.mel.source_flower"))
            .background(guiHelper.createBlankDrawable(105, 50))
            .icon(guiHelper.createDrawableItemStack("mel:source_flower"))
            .handleLookup((layOut, recipe, focuses) => {
                layOut.addSlot("INPUT", 16, 12).addItemStack(recipe.data.input);
                layOut.addSlot("CATALYST", 46, 12).addItemStack("mel:source_flower");
                layOut.addSlot("OUTPUT", 75, 12).addItemStack(recipe.data.output);
            })
            .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
                let overlay = guiHelper.createDrawable("botania:textures/gui/pure_daisy_overlay.png", 0, 0, 64, 44);
                $RenderSystem.enableBlend();
                overlay.draw(guiGraphics, 24, 0);
                $HUDHandler.renderManaBar(guiGraphics, 2, 46, 0x8a2be2, 0.75, recipe.data.cost / 10, 1000);
                $RenderSystem.disableBlend();

                let costText = Text.translate("desc.mel.source_flower.cost", (recipe.data.cost / 100).toFixed(0));
                let timeText = Text.translate("desc.mel.source_flower.time", (recipe.data.time / 20).toFixed(0));
                guiGraphics.drawWordWrap(Client.font, costText, 2, 36, 100, 0);
                guiGraphics.drawWordWrap(Client.font, timeText, 67, 0, 100, 0);
            });
    });
});

JEIAddedEvents.registerRecipes((event) => {
    event
        .custom("mel:source_flower")
        .add({ input: "botania:shimmerrock", output: "ars_nouveau:sourcestone", cost: 100, time: 60 })
        .add({ input: "mel:mana_string_block", output: "ars_nouveau:magebloom_block", cost: 300, time: 80 });
});
