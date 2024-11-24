ServerEvents.tags("item", (event) => {
    event.add("curios:charm", "mel:dream_lantern");
    event.add("botania:special_floating_flowers", "mel:flowing_source_flower");

    Ingredient.all.itemIds.forEach((itemId) => {
        event.add("mel:all_item", itemId);
    });
});

ServerEvents.tags("block", (event) => {
    event.add("minecraft:dirt", ["white_concrete", "botania:enchanted_soil"]);
    event.add("stripped_logs", /:stripped.*log$/);
    event.add("botania:special_floating_flowers", "mel:flowing_source_flower");
    event.add("mel:crucible_heat_source", ["fire", "touch", "lava", "magma_block"]);
});
