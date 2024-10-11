ServerEvents.recipes((event) => {
    const { custommachinery } = event.recipes;

    function engraving_table(output, inputToken, input) {
        let machine = custommachinery.custom_craft("mel:engraving_table", output);
        machine.requireFunctionOnStart((ctx) => {
            const { level, pos } = ctx.block;
            let auraChunkCap = level.getChunkAt(pos).getCapability($NaturesAuraAPI.CAP_AURA_CHUNK).resolve().get();
            let auraAmount = $NaturesAuraAPI.instance().getAuraInArea(level, pos, 16);

            ctx.machine.data.aura_amount = auraAmount;

            if (auraAmount >= 1000) {
                auraChunkCap.drainAura(pos, 1000);
                return ctx.success();
            }
            return ctx.error(Text.translate("machine_error.mel.aura"));
        });

        machine.requireItem(inputToken, "inputToken");

        input.forEach((item) => {
            if (typeof item === "string") {
                if (item.startsWith("#")) {
                    machine.requireItemTag(item.substring(1));
                } else {
                    machine.requireItem(item);
                }
            } else {
                machine.requireItem(item);
            }
        });
    }

    engraving_table("naturesaura:token_joy", "mel:token_base", [
        Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:overworld"}').strongNBT(),
        "minecraft:torch",
        "minecraft:apple",
        "naturesaura:gold_leaf",
        "minecraft:poppy",
        "naturesaura:gold_fiber",
        "naturesaura:gold_powder",
    ]);

    engraving_table("naturesaura:token_euphoria", "naturesaura:token_joy", Array(8).fill("naturesaura:gold_powder"));

    engraving_table(Item.of("mel:sun_crystal", "{Solar:0}"), "diamond", [
        Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:overworld"}').strongNBT(),
        "naturesaura:calling_spirit",
        "naturesaura:sky_ingot",
        "naturesaura:sky_ingot",
        "naturesaura:token_euphoria",
        "naturesaura:sky_ingot",
        "naturesaura:sky_ingot",
        "naturesaura:calling_spirit",
    ]);

    engraving_table("naturesaura:token_anger", "mel:token_base", [
        "fluxnetworks:flux_dust",
        "fluxnetworks:flux_dust",
        "fluxnetworks:flux_dust",
        "fluxnetworks:flux_dust",
        "ars_nouveau:bombegranate_pod",
        "botania:rune_fire",
        "ars_nouveau:fire_essence",
    ]);
});
