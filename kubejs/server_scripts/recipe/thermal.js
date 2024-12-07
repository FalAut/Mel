ServerEvents.recipes((event) => {
    const { thermal } = event.recipes;

    thermal.chiller("thermal:enderium_ingot", ["thermal:ender", "thermal:chiller_ingot_cast"]);
    thermal.chiller("thermal:lumium_ingot", ["mel:molten_lumium", "thermal:chiller_ingot_cast"]);
    thermal.chiller("thermal:signalum_ingot", ["mel:molten_signalum", "thermal:chiller_ingot_cast"]);

    thermal.pulverizer("forbidden_arcanus:mundabitur_dust", "mel:colorless_gem");
    thermal.refinery("thermal:rubber", Fluid.of("thermal:latex", 100));

    thermal.smelter("16x powah:dielectric_paste", [
        "thermal:cured_rubber",
        "minecraft:clay_ball",
        "fluxnetworks:flux_dust",
    ]);
});
