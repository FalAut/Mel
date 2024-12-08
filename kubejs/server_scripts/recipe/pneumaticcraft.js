ServerEvents.recipes((event) => {
    event.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
            {
                type: "pneumaticcraft:stacked_item",
                count: 64,
                item: "naturesaura:depth_ingot",
            },
            {
                item: "mel:unstable_singularity",
            },
        ],
        pressure: 4.0,
        results: [
            {
                type: "pneumaticcraft:stacked_item",
                count: 64,
                item: "pneumaticcraft:ingot_iron_compressed",
            },
        ],
    });

    event.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
            {
                type: "pneumaticcraft:stacked_item",
                count: 64,
                item: "ars_nouveau:sourcestone",
            },
            {
                item: "mel:unstable_singularity",
            },
        ],
        pressure: 4.0,
        results: [
            {
                type: "pneumaticcraft:stacked_item",
                count: 64,
                item: "pneumaticcraft:compressed_stone",
            },
        ],
    });
});
