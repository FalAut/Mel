ServerEvents.tags("item", (event) => {
    event.add("curios:dream_lantern", "mel:dream_lantern");
    event.add("botania:special_floating_flowers", "mel:flowing_source_flower");

    Ingredient.all.itemIds.forEach((itemId) => {
        event.add("mel:all_item", itemId);
    });

    event.add("mel:fired_crucible_fuel", ["gray_concrete"]);
    event.add("mel:modular_offering_input", [
        "naturesaura:infused_iron",
        "naturesaura:tainted_gold",
        "naturesaura:sky_ingot",
        "naturesaura:infused_iron_block",
        "naturesaura:tainted_gold_block",
        "naturesaura:sky_ingot_block",
    ]);
});

ServerEvents.tags("block", (event) => {
    event.add("minecraft:dirt", ["white_concrete", "botania:enchanted_soil"]);
    event.add("stripped_logs", /:stripped.*log$/);
    event.add("botania:special_floating_flowers", "mel:flowing_source_flower");
    event.add("mel:crucible_heat_source", ["fire", "torch", "lava", "magma_block"]);

    event.add("minecraft:mineable/axe", ["mel:infused_wood"]);
    event.add("minecraft:needs_iron_tool", ["mel:reinforced_stone_frame", "mel:futura_block", "mel:source_fluidlink"]);
    event.add("minecraft:mineable/pickaxe", ["mel:reinforced_stone_frame", "mel:futura_block", "mel:source_fluidlink"]);
});
