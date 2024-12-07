StartupEvents.recipeSchemaRegistry((event) => {
    const { components } = event;

    const RESULTS = components
        .get("outputFluidOrItemArray")()
        .key("result")
        ["alt(java.lang.String)"]("results")
        ["alt(java.lang.String)"]("output")
        ["alt(java.lang.String)"]("outputs");
    const INGREDIENTS = components
        .get("inputFluidOrItemArray")()
        .key("ingredient")
        ["alt(java.lang.String)"]("ingredients")
        ["alt(java.lang.String)"]("input")
        ["alt(java.lang.String)"]("inputs");

    const EXPERIENCE = components.get("floatNumber")().key("experience").optional(0).preferred("xp");

    const ENERGY = components.get("intNumber")().key("energy").optional(8000);
    const ENERGY_MOD = components.get("floatNumber")().key("energy_mod").optional(1).preferred("energyMod").exclude();

    const BASIC_SCHEMA = new $RecipeSchema(RESULTS, INGREDIENTS, ENERGY, EXPERIENCE, ENERGY_MOD);

    event.register("thermal:furnace", BASIC_SCHEMA);
    event.register("thermal:sawmill", BASIC_SCHEMA);
    event.register("thermal:pulverizer", BASIC_SCHEMA);
    event.register("thermal:pulverizer_recycle", BASIC_SCHEMA);
    event.register("thermal:smelter", BASIC_SCHEMA);
    event.register("thermal:smelter_recycle", BASIC_SCHEMA);
    event.register("thermal:centrifuge", BASIC_SCHEMA);
    event.register("thermal:press", BASIC_SCHEMA);
    event.register("thermal:crucible", BASIC_SCHEMA);
    event.register("thermal:chiller", BASIC_SCHEMA);
    event.register("thermal:refinery", BASIC_SCHEMA);
    event.register("thermal:pyrolyzer", BASIC_SCHEMA);
    event.register("thermal:bottler", BASIC_SCHEMA);
    event.register("thermal:brewer", BASIC_SCHEMA);
    event.register("thermal:crystallizer", BASIC_SCHEMA);

    // // 有机灌注器
    // const WATER = components.get("intNumber")().key("water").optional(0);
    // const WATER_MOD = components.get("floatNumber")().key("water_mod").optional(1).preferred("waterMod").exclude();

    // const INSOLATOR_SCHEMA = new $RecipeSchema(RESULTS, INGREDIENTS, EXPERIENCE, WATER, WATER_MOD, ENERGY, ENERGY_MOD);

    // event.register("thermal:insolator", INSOLATOR_SCHEMA);

    // // 催化剂
    // const PRIMARY_MOD = components.get("floatNumber")().key("primary_mod").optional(1).preferred("primaryMod");
    // const SECONDARY_MOD = components.get("floatNumber")().key("secondary_mod").optional(1).preferred("secondaryMod");
    // const MIN_CHANCE = components.get("floatNumber")().key("minChance").optional(0).preferred("minChance");
    // const USE_CHANCE = components.get("floatNumber")().key("useChance").optional(1).preferred("useChance");

    // const CATALYST_SCHEMA = new $RecipeSchema(
    //     INGREDIENTS,
    //     PRIMARY_MOD,
    //     SECONDARY_MOD,
    //     ENERGY_MOD,
    //     MIN_CHANCE,
    //     USE_CHANCE
    // );

    // event.register("thermal:smelter_catalyst", CATALYST_SCHEMA);
    // event.register("thermal:insolator_catalyst", CATALYST_SCHEMA);
    // event.register("thermal:pulverizer_catalyst", CATALYST_SCHEMA);

    // // 燃料

    // const ITEM_FUEL_ENERGY = components.get("intNumberRange")()("min_energy", "max_energy").key("energy").optional(0);
    // const FLUID_FUEL_ENERGY = components.get("intNumberRange")()("min_energy", "max_energy").key("energy").optional(0);

    // const ITEM_FUEL = new $RecipeSchema(INGREDIENTS, ITEM_FUEL_ENERGY, ENERGY_MOD);
    // const FLUID_FUEL = new $RecipeSchema(INGREDIENTS, FLUID_FUEL_ENERGY, ENERGY_MOD);

    // event.register("thermal:stirling_fuel", ITEM_FUEL);
    // event.register("thermal:compression_fuel", FLUID_FUEL);
    // event.register("thermal:magmatic_fuel", FLUID_FUEL);
    // event.register("thermal:numismatic_fuel", ITEM_FUEL);
    // event.register("thermal:lapidary_fuel", ITEM_FUEL);
    // event.register("thermal:disenchantment_fuel", ITEM_FUEL);
    // event.register("thermal:gourmand_fuel", ITEM_FUEL);
});
