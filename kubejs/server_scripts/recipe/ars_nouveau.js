ServerEvents.recipes((event) => {
    event.custom({
        type: "ars_nouveau:imbuement",
        count: 1,
        input: {
            item: "botania:shimmerrock",
        },
        output: "ars_nouveau:source_gem",
        pedestalItems: [
            {
                item: {
                    item: "botania:elementium_ingot",
                },
            },
            {
                item: {
                    item: "botania:dragonstone",
                },
            },
            {
                item: {
                    item: "botania:pixie_dust",
                },
            },
        ],
        source: 1000,
    });

    event.custom({
        type: "ars_nouveau:imbuement",
        count: 1,
        input: {
            item: "ars_nouveau:source_gem",
        },
        output: "ars_nouveau:conjuration_essence",
        pedestalItems: [
            {
                item: {
                    item: "naturesaura:sky_ingot",
                },
            },
            {
                item: {
                    item: "ars_nouveau:frostaya_pod",
                },
            },
            {
                item: {
                    item: "botania:rune_water",
                },
            },
        ],
        source: 1000,
    });

    event.custom({
        type: "ars_nouveau:imbuement",
        count: 1,
        input: {
            item: "ars_nouveau:source_gem",
        },
        output: "ars_nouveau:conjuration_essence",
        pedestalItems: [
            {
                item: {
                    item: "naturesaura:sky_ingot",
                },
            },
            {
                item: {
                    item: "ars_nouveau:frostaya_pod",
                },
            },
            {
                item: {
                    item: "botania:rune_water",
                },
            },
        ],
        source: 1000,
    });

    event.custom({
        type: "ars_nouveau:imbuement",
        count: 1,
        input: {
            item: "ars_nouveau:source_gem",
        },
        output: "ars_nouveau:abjuration_essence",
        pedestalItems: [
            {
                item: {
                    item: "ars_nouveau:bastion_pod",
                },
            },
            {
                item: {
                    item: "botania:rune_mana",
                },
            },
            {
                item: {
                    item: "botania:dragonstone",
                },
            },
        ],
        source: 1000,
    });

    event.custom({
        type: "ars_nouveau:imbuement",
        count: 1,
        input: {
            tag: "forge:seeds",
        },
        output: "ars_nouveau:magebloom_crop",
        pedestalItems: [
            {
                item: {
                    item: "ars_nouveau:magebloom_fiber",
                },
            },
            {
                item: {
                    item: "ars_nouveau:magebloom_fiber",
                },
            },
            {
                item: {
                    item: "ars_nouveau:magebloom_fiber",
                },
            },
            {
                item: {
                    item: "ars_nouveau:magebloom_fiber",
                },
            },
        ],
        source: 5000,
    });

    event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        output: {
            item: "ars_nouveau:ritual_wilden_summon",
        },
        pedestalItems: [
            {
                item: "ars_nouveau:conjuration_essence",
            },
            {
                item: "ars_nouveau:abjuration_essence",
            },
            {
                item: "ars_nouveau:manipulation_essence",
            },
            {
                item: "ars_nouveau:magebloom",
            },
            {
                item: "botania:terrasteel_ingot",
            },
        ],
        reagent: [{ type: "forge:nbt", item: "botania:mana_tablet", count: 1, nbt: "{mana:500000}" }],
        sourceCost: 5000,
    });

    event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        output: {
            item: "ae2:condenser",
        },
        pedestalItems: [
            {
                item: "ars_nouveau:jar_of_light",
            },
            {
                item: "ae2:fluix_pearl",
            },
            {
                item: "ae2:fluix_pearl",
            },
            {
                item: "ars_nouveau:void_jar",
            },
            {
                item: "ae2:fluix_pearl",
            },
            {
                item: "ae2:fluix_pearl",
            },
        ],
        reagent: [{ item: "ars_nouveau:wilden_tribute" }],
        sourceCost: 10000,
    });

    event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        output: {
            item: "mel:source_fluidlink",
        },
        pedestalItems: [
            {
                item: "thermal:electrum_block",
            },
            {
                item: "thermal:electrum_block",
            },
            {
                item: "ars_nouveau:source_gem_block",
            },
            {
                item: "ars_nouveau:source_gem_block",
            },
        ],
        reagent: [{ item: "ars_nouveau:manipulation_essence" }],
        sourceCost: 10000,
    });
});
