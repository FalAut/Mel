ServerEvents.recipes((event) => {
    event.custom({
        type: "botanypots:crop",
        seed: { item: "minecraft:ender_pearl" },
        categories: ["dirt", "farmland"],
        growthTicks: 1200,
        display: { type: "botanypots:aging", block: "minecraft:sculk_vein" },
        drops: [
            { chance: 1.0, output: { item: "minecraft:ender_pearl" }, minRolls: 1, maxRolls: 2 },
            { chance: 0.05, output: { item: "minecraft:ender_pearl" }, minRolls: 1, maxRolls: 2 },
        ],
    });

    event.custom({
        type: "botanypots:crop",
        seed: { item: "minecraft:blaze_rod" },
        categories: ["dirt", "farmland"],
        growthTicks: 1200,
        display: { type: "botanypots:aging", block: "botania:blaze_block" },
        drops: [
            { chance: 1.0, output: { item: "minecraft:blaze_rod" }, minRolls: 1, maxRolls: 2 },
            { chance: 0.05, output: { item: "minecraft:blaze_rod" }, minRolls: 1, maxRolls: 2 },
        ],
    });
});
