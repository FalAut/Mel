ServerEvents.recipes((event) => {
    const { custommachinery } = event.recipes;

    aura_grinder("minecraft:gravel", "minecraft:cobblestone");
    aura_grinder("minecraft:sand", "minecraft:gravel");
    aura_grinder("2x naturesaura:gold_powder", "naturesaura:gold_leaf");
    aura_grinder("2x mel:fiber", "#leaves");

    function aura_grinder(output, input) {
        let machine = custommachinery.custom_machine("mel:aura_grinder", 100);
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

        if (input.startsWith("#")) {
            machine.requireItemTag(input);
        } else {
            machine.requireItem(input);
        }

        machine.produceItem(output);
    }
});
