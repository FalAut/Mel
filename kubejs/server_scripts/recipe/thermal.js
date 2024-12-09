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

    thermal.smelter("forbidden_arcanus:dark_nether_star", [
        "minecraft:nether_star",
        "forbidden_arcanus:processed_obsidian_block",
        "forbidden_arcanus:dark_matter",
    ]);

    thermal.smelter("forbidden_arcanus:obsidian_with_iron", ["obsidian", "iron_block"]);
    thermal.smelter("forbidden_arcanus:dark_matter", [
        "ae2:matter_ball",
        "botania:black_lotus",
        "naturesaura:tainted_gold",
    ]);

    thermal.smelter("64x forbidden_arcanus:dark_matter", [
        "ae2:matter_ball",
        "botania:blacker_lotus",
        "naturesaura:tainted_gold",
    ]);
});
