ServerEvents.recipes((event) => {
    event.replaceInput({ id: "naturesaura:tree_ritual/ancient_sapling" }, "sugar_cane", "oak_log");
    event.replaceInput({ id: "naturesaura:tree_ritual/ancient_sapling" }, "dandelion", "poppy");
    event.replaceInput({ id: "naturesaura:offering/clock_hand" }, "nether_star", "clock");
    event.replaceInput({ id: "botania:natura_pylon" }, "ender_eye", "naturesaura:infused_iron_block");
    event.replaceInput({ id: "ars_nouveau:magebloom_crop" }, "ars_nouveau:source_gem", "ars_nouveau:magebloom_fiber");
    event.replaceInput({ id: "botania:light_relay" }, "botania:red_string", "botania:spark");
    event.replaceInput({ id: "botania:spark_upgrade_dispersive" }, "botania:pixie_dust", "botania:mana_powder");
    event.replaceInput({ id: "botania:spark_upgrade_dominant" }, "botania:pixie_dust", "botania:mana_powder");
    event.replaceInput({ id: "botania:spark_upgrade_recessive" }, "botania:pixie_dust", "botania:mana_powder");
    event.replaceInput({ id: "botania:spark_upgrade_isolated" }, "botania:pixie_dust", "botania:mana_powder");
    event.replaceInput({ id: "thermal:machine_smelter" }, "thermal:invar_gear", "thermal:redstone_servo");
    event.replaceInput({ id: "modularrouters:blank_module" }, "paper", "iron_ingot");
    event.replaceInput({ id: "thermal:chiller_ingot_cast" }, "minecraft:nether_brick", "#forge:ingots");
});
