StartupEvents.recipeSchemaRegistry((event) => {
    const { components } = event;

    event.register(
        "naturesaura:altar",
        new $RecipeSchema(
            components.get("outputItem")().key("output"),
            components.get("inputItem")().key("input"),
            components.get("inputItem")().key("catalyst").defaultOptional(),
            components.get("intNumber")().key("aura").optional(1000).alwaysWrite(),
            components.get("intNumber")().key("time").optional(60).alwaysWrite()
        )
    );

    event.register(
        "naturesaura:animal_spawner",
        new $RecipeSchema(
            components.get("nonBlankString")().key("entity"),
            components.get("inputItemArray")().key("ingredients"),
            components.get("intNumber")().key("aura").optional(10000).alwaysWrite(),
            components.get("intNumber")().key("time").optional(60).alwaysWrite()
        )
    );

    event.register(
        "naturesaura:offering",
        new $RecipeSchema(
            components.get("outputItem")().key("output"),
            components.get("inputItem")().key("input"),
            components.get("inputItem")().key("start_item").optional("naturesaura:calling_spirit").alwaysWrite()
        )
    );

    event.register(
        "naturesaura:tree_ritual",
        new $RecipeSchema(
            components.get("outputItem")().key("output"),
            components.get("inputItemArray")().key("ingredients"),
            components.get("inputItem")().key("sapling").optional("oak_sapling").alwaysWrite(),
            components.get("intNumber")().key("time").optional(200).alwaysWrite()
        )
    );

    event.register(
        "wizards_reborn:mortar",
        new $RecipeSchema(components.get("outputItem")().key("to"), components.get("inputItem")().key("from"))
    );

    event.register(
        "botania:petal_apothecary",
        new $RecipeSchema(
            components.get("outputItem")().key("output"),
            components.get("inputItemArray")().key("ingredients"),
            components.get("inputItem")().key("reagent").optional("#botania:seed_apothecary_reagent").alwaysWrite()
        )
    );

    event.register(
        "botania:runic_altar",
        new $RecipeSchema(
            components.get("outputItem")().key("output"),
            components.get("inputItemArray")().key("ingredients"),
            components.get("intNumber")().key("mana").optional(5200).alwaysWrite()
        )
    );

    event.register(
        "botania:elven_trade",
        new $RecipeSchema(
            components.get("outputItemArray")().key("output"),
            components.get("inputItemArray")().key("ingredients")
        )
    );

    event.register(
        "botania:terra_plate",
        new $RecipeSchema(
            components.get("outputItem")().key("result"),
            components.get("inputItemArray")().key("ingredients"),
            components.get("intNumber")().key("mana").optional(500000).alwaysWrite()
        )
    );

    event.register(
        "occultism:spirit_fire",
        new $RecipeSchema(components.get("outputItem")().key("result"), components.get("inputItem")().key("ingredient"))
    );

    event.register(
        "thermal:refinery",
        new $RecipeSchema(
            components.get("outputFluidOrItemArray")().key("result"),
            components.get("inputFluidOrItem")().key("ingredient"),
            components.get("intNumber")().key("energy").defaultOptional(),
            components.get("floatNumber")().key("experience").defaultOptional()
        )
    );

    event.register(
        "thermal:pulverizer",
        new $RecipeSchema(
            components.get("outputFluidOrItemArray")().key("result"),
            components.get("inputFluidOrItemArray")().key("ingredient")
        )
    );
});
