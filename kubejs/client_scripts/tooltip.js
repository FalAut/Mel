ItemEvents.tooltip((event) => {
    event.add("oak_sapling", Text.translate("tooltip.mel.oak_sapling").gold());
    event.add("mel:oak_mortar", Text.translate("tooltip.mel.oak_mortar").gold());
    event.add("mel:dream_latern", Text.translate("tooltip.mel.dream_latern").gold());
    event.add("botania:black_lotus", Text.translate("tooltip.mel.black_lotus").gold());
    event.add(
        ["mel:source_flower", "mel:flowing_source_flower"],
        Text.translate("tooltip.mel.source_flower").gray().italic(true)
    );
    event.add("mel:dream_wings", Text.translate("tooltip.mel.dream_wings").gold());
    event.add("mel:addition_sigil", Text.translate("tooltip.mel.addition_sigil").gold());
    event.add("mel:division_sigil", Text.translate("tooltip.mel.division_sigil").gold());
    event.add("mel:fire_starter", Text.translate("tooltip.mel.fire_starter").gold());
    event.add("mel:fired_crucible", [
        Text.translate("tooltip.mel.fired_crucible_1").gold(),
        Text.translate("tooltip.mel.fired_crucible_2").gold(),
        Text.translate("tooltip.mel.fired_crucible_3").gold(),
        Text.translate("tooltip.mel.fired_crucible_4").gold(),
        Text.translate("tooltip.mel.fired_crucible_5").gold(),
    ]);
    event.add("mel:oak_crucible", [
        Text.translate("tooltip.mel.oak_crucible_1").gold(),
        Text.translate("tooltip.mel.oak_crucible_2").gold(),
        Text.translate("tooltip.mel.oak_crucible_3").gold(),
    ]);
    event.add("mel:gensousitu_bucket", [
        Text.translate("tooltip.mel.gensousitu_bucket_1").gold(),
        Text.translate("tooltip.mel.gensousitu_bucket_2").gold(),
    ]);
    event.add("mel:whos_gift", Text.translate("tooltip.mel.whos_gift").gold());
    event.add("composter", Text.translate("tooltip.mel.composter").gold());

    event.add("mel:ancient_aura_generator_core", [
        Text.translate("tooltip.mel.ancient_aura_generator_core_1").gold(),
        Text.translate("tooltip.mel.ancient_aura_generator_core_2").gold(),
        Text.translate("tooltip.mel.ancient_aura_generator_core_3").gold(),
        Text.translate("tooltip.mel.ancient_aura_generator_core_4").gold(),
        Text.translate("tooltip.mel.ancient_aura_generator_core_5").gold(),
        Text.translate("tooltip.mel.ancient_aura_generator_core_6").gold(),
    ]);

    event.add("mel:dream_lantern", [
        Text.translate("tooltip.mel.dream_lantern_1").gold(),
        Text.translate("tooltip.mel.dream_lantern_2").gold(),
        Text.translate("tooltip.mel.dream_lantern_3").gold(),
        Text.translate("tooltip.mel.dream_lantern_4").gold(),
    ]);

    event.add("mel:colossal_furnace_core", [
        Text.translate("tooltip.mel.colossal_furnace_1").gold(),
        Text.translate("tooltip.mel.colossal_furnace_2"),
        Text.translate("tooltip.mel.colossal_furnace_3").gold(),
        Text.translate("tooltip.mel.colossal_furnace_4").gold(),
        Text.translate("tooltip.mel.colossal_furnace_5").gold(),
        Text.translate("tooltip.mel.colossal_furnace_6").gold(),
        Text.translate("tooltip.mel.colossal_furnace_7").green(),
        Text.translate("tooltip.mel.colossal_furnace_8").red(),
    ]);

    const cobbleGenData = [
        { tier: 1, cobbleCount: 1, time: 6, maxBuffer: 64 },
        { tier: 2, cobbleCount: 2, time: 5, maxBuffer: 128 },
        { tier: 3, cobbleCount: 4, time: 4, maxBuffer: 192 },
        { tier: 4, cobbleCount: 8, time: 3, maxBuffer: 256 },
        { tier: 5, cobbleCount: 16, time: 2, maxBuffer: 512 },
        { tier: 6, cobbleCount: 32, time: 1, maxBuffer: 1024 },
    ];

    cobbleGenData.forEach((data) => {
        event.add(`mel:cobble_gen_tier${data.tier}`, [
            Text.translate("tooltip.mel.cobble_gen_1", data.cobbleCount.toFixed(0)).gold(),
            Text.translate("tooltip.mel.cobble_gen_2", data.time.toFixed(0)).gold(),
            Text.translate("tooltip.mel.cobble_gen_3", data.maxBuffer.toFixed(0)).gold(),
            Text.translate("tooltip.mel.cobble_gen_4").green(),
        ]);
    });

    event.add("mel:portable_crafting_table", [
        Text.translate("tooltip.mel.portable_crafting_table_1").gold(),
        Text.translate(
            "tooltip.mel.portable_crafting_table_2",
            Text.keybind("key.mel.portable_crafting").green()
        ).gold(),
    ]);
});
