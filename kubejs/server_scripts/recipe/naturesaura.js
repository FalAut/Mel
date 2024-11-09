ServerEvents.recipes((event) => {
    const { naturesaura } = event.recipes;

    naturesaura.tree_ritual("naturesaura:nature_altar", [
        Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:overworld"}').strongNBT(),
        "oak_sapling",
        "oak_sapling",
        "oak_sapling",
        "smooth_stone",
        "smooth_stone",
        "smooth_stone",
        "smooth_stone",
    ]);

    naturesaura.tree_ritual("naturesaura:offering_table", [
        Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:overworld"}').strongNBT(),
        "naturesaura:token_joy",
        "naturesaura:ancient_stick",
        "naturesaura:ancient_stick",
        "naturesaura:infused_stone",
        "mel:infused_wood",
        "naturesaura:infused_stone",
        "mel:infused_wood",
    ]);

    naturesaura.tree_ritual("mel:engraving_table", [
        Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:overworld"}').strongNBT(),
        "mel:token_base",
        "naturesaura:ancient_stick",
        "naturesaura:ancient_stick",
        "mel:infused_wood",
        "mel:infused_wood",
        "mel:infused_wood",
        "mel:infused_wood",
    ]);

    naturesaura.tree_ritual("tiab:time_in_a_bottle", [
        "naturesaura:clock_hand",
        Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:overworld"}').strongNBT(),
        "naturesaura:sky_ingot",
        "naturesaura:sky_ingot",
        "naturesaura:sky_ingot",
        "naturesaura:sky_ingot",
        "naturesaura:sky_ingot",
        "naturesaura:sky_ingot",
    ]);

    naturesaura.tree_ritual("mel:dream_lantern", [
        "minecraft:chain",
        "naturesaura:aura_trove",
        Item.of("mel:sun_crystal", "{Solar:100.0d}").strongNBT(),
        Item.of("mel:sun_crystal", "{Solar:100.0d}").strongNBT(),
        "mel:infused_wood",
        "mel:infused_wood",
        "mel:infused_wood",
        "mel:infused_wood",
    ]);

    naturesaura.tree_ritual("botania:runic_altar", [
        Item.of("mel:sun_crystal", "{Solar:100.0d}").strongNBT(),
        "botania:mana_diamond",
        "botania:livingrock",
        "botania:livingrock",
        "botania:livingrock",
        "botania:mana_powder",
        "botania:livingrock",
        "botania:manasteel_ingot",
    ]);

    naturesaura.tree_ritual("naturesaura:conversion_catalyst", [
        Item.of("mel:sun_crystal", "{Solar:100.0d}").strongNBT(),
        "naturesaura:gold_brick",
        "naturesaura:gold_leaf",
        "naturesaura:token_euphoria",
        "naturesaura:calling_spirit",
        "naturesaura:infused_iron",
        "naturesaura:sky_ingot",
        Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:overworld"}').strongNBT(),
    ]);

    naturesaura.altar("naturesaura:infused_stone", "minecraft:stone");
    naturesaura.altar("mel:infused_wood", "#logs");
    naturesaura.altar("minecraft:glowstone_dust", "minecraft:redstone", "naturesaura:conversion_catalyst");
    naturesaura.altar("minecraft:amethyst_shard", "minecraft:emerald", "naturesaura:conversion_catalyst");
    naturesaura.altar("minecraft:quartz", "minecraft:lapis_lazuli", "naturesaura:conversion_catalyst");
    naturesaura.altar("botania:vivid_seeds", "botania:grass_seeds");

    naturesaura.offering("mel:whos_gift", "mel:wrapped_gift");
});
