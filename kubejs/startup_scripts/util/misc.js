Platform.setModName("mel", "Mel");

StartupEvents.modifyCreativeTab("kubejs:tab", (event) => {
    event.setDisplayName("Mel");
    event.remove("mel:sun_crystal");
    event.remove("mel:unstable_ingot");
    event.add([
        Item.of("mel:sun_crystal", "{Solar:0}"),
        Item.of("mel:sun_crystal", "{Solar:100.0d}"),
        Item.of("mel:unstable_ingot", "{Stable:100.0d}"),
        Item.of("mel:division_sigil").enchant("mel:activate", 1),
        Item.of("mel:aggregation_sigil").enchant("mel:activate", 1),
        Item.of("mel:separation_sigil").enchant("mel:activate", 1),
        Item.of("mel:gathering_sigil").enchant("mel:activate", 1),
        Item.of(
            "ae2:meteorite_compass",
            '{display:{Name:\'{"translate":"item.mel.maze_compass","bold":true,"italic":false}\'}}'
        ).withLore([
            Text.translate("tooltip.mel.meteorite_compass1").gold().italic(false),
            Text.translate("tooltip.mel.meteorite_compass2").gold().italic(false),
            Text.translate("tooltip.mel.meteorite_compass3").gold().italic(false),
        ]),
    ]);
});

ItemEvents.modification((event) => {
    Ingredient.all.stacks.forEach((itm) => {
        if (itm.edible) {
            event.modify(itm, (item) => {
                item.setFoodProperties((food) => {
                    food.alwaysEdible();
                });
            });
        }
    });
});
