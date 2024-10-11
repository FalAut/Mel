ItemEvents.tooltip((event) => {
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
});
