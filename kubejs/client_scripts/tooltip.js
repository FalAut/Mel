ItemEvents.tooltip((event) => {
    event.add("oak_sapling", Text.translate("tooltip.mel.oak_sapling").gold());
    event.add("mel:oak_mortar", Text.translate("tooltip.mel.oak_mortar").gold());
    event.add(["botania:livingrock", "botania:livingwood"], Text.translate("tooltip.mel.cosume_aura").gold());
    event.add("mel:dream_latern", Text.translate("tooltip.mel.dream_latern").gold());
    event.add("botania:black_lotus", Text.translate("tooltip.mel.black_lotus").gold());
    event.add(
        ["mel:source_flower", "mel:flowing_source_flower"],
        Text.translate("tooltip.mel.source_flower").gray().italic(true)
    );
    event.add("mel:dream_wings", Text.translate("tooltip.mel.dream_wings").gold());
    event.add("mel:aggregation_sigil", Text.translate("tooltip.mel.aggregation_sigil").gold());
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
    ]);

    event.add("mel:dream_lantern", [
        Text.translate("tooltip.mel.dream_lantern_1").gold(),
        Text.translate("tooltip.mel.dream_lantern_2").gold(),
        Text.translate("tooltip.mel.dream_lantern_3").gold(),
    ]);
});
