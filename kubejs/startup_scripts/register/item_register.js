StartupEvents.registry("item", (event) => {
    event.create("mel:wooden_shears", "shears").maxDamage(50);
    event.create("mel:fiber").color(0x4caf50).texture("naturesaura:item/gold_fiber");
    event.createCustom("mel:oak_mortar", () => new $MortarItem(new $Item$Properties().stacksTo(1), 400));
    event.create("mel:token_base");
    event.create("mel:gift_box");
    event.create("mel:wrapped_gift").glow(true);
    event.create("mel:whos_gift").glow(true);
    event
        .create("mel:sun_crystal")
        .unstackable()
        .glow(true)
        .barWidth((i) => {
            if (i.nbt && i.nbt.contains("Solar") && i.nbt.getInt("Solar") != 0) {
                return ((i.nbt.getInt("Solar") + 8) / 100) * 13;
            }
            return 0;
        })
        .barColor((i) => Color.GOLD);

    event.createCustom("mel:dream_lantern", () => new $ItemAuraCache("dream_lantern", 2560000));

    event
        .create("mel:unstable_ingot")
        .barWidth((i) => {
            if (i.nbt && i.nbt.contains("Stable") && i.nbt.getInt("Stable") != 0) {
                return ((i.nbt.getInt("Stable") + 8) / 100) * 13;
            }
            return 100;
        })
        .barColor((i) => {
            if (i.nbt == null || !i.nbt.contains("Stable")) return Color.WHITE;

            let stable = i.nbt.getInt("Stable");
            let greenBlue = Math.floor((stable / 100) * 255);
            return Color.rgba(255, greenBlue, greenBlue, 100);
        });

    event.create("mel:addition_sigil").unstackable();
    event.create("mel:subtraction_sigil").unstackable();
    event.create("mel:multiplication_sigil").unstackable();
    event.create("mel:division_sigil").unstackable();
    event.create("mel:pseudo_inversion_sigil").unstackable().glow(true);

    event.create("mel:colorless_gem");
    event.create("mel:unstable_singularity");
    event
        .create("mel:dream_wings")
        .tag("curios:ring")
        .unstackable()
        .attachCapability(
            CuriosCapabilityBuilder.CURIOS.itemStack()
                .canEquip(() => true)
                .canUnequip(() => true)
                .onEquip((_, ctx) => toggleFlying(ctx.entity(), true))
                .onUnequip((_, ctx) => toggleFlying(ctx.entity(), false))
                .curioTick((_, ctx) => toggleFlying(ctx.entity(), true))
        );
});
