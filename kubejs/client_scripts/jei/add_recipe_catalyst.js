JEIAddedEvents.registerRecipeCatalysts((event) => {
    const catalysts = [
        ["mel:oak_mortar", "wizards_reborn:mortar"],
        ["mel:source_flower", "mel:source_flower"],
        ["mel:flowing_source_flower", "mel:source_flower"],
        ["mel:colossal_furnace_core", $RecipeTypes.SMELTING],
        ["minecraft:beacon", "mel:beacon_convert"],
    ];

    catalysts.forEach(([input, recipe]) => {
        event.data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"](
            input,
            recipe
        );
    });
});
