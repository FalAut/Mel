ServerEvents.recipes((event) => {
    const { kubejs, minecraft } = event.recipes;

    function fourShaped(/**@type  {OutputItem_} */ output, /**@type  {InputItem_} */ input) {
        kubejs.shaped(output, ["AA", "AA"], {
            A: input,
        });

        event.custom({
            type: "functionalstorage:custom_compacting",
            higher_input: {
                count: 1,
                item: output,
            },
            lower_input: {
                count: 4,
                item: input,
            },
        });
    }

    function fullShaped(/**@type  {OutputItem_} */ output, /**@type  {InputItem_} */ input) {
        kubejs.shaped(output, ["AAA", "AAA", "AAA"], {
            A: input,
        });

        event.custom({
            type: "functionalstorage:custom_compacting",
            higher_input: {
                count: 1,
                item: output,
            },
            lower_input: {
                count: 9,
                item: input,
            },
        });
    }

    fullShaped("mel:mana_string_block", "botania:mana_string");

    kubejs.shapeless("forbidden_arcanus:aurum_chest_boat", ["forbidden_arcanus:aurum_boat", "#forge:chests/wooden"]);
    kubejs.shapeless("forbidden_arcanus:edelwood_chest_boat", [
        "forbidden_arcanus:edelwood_boat",
        "#forge:chests/wooden",
    ]);
    kubejs.shapeless("mel:flowing_source_flower", ["#botania:floating_flowers", "mel:source_flower"]);
    kubejs.shapeless("9x botania:mana_string", "mel:mana_string_block");
    kubejs.shapeless("mel:oak_mortar", ["stick", "bowl"]);
    kubejs.shapeless("mel:portable_crafting_table", ["stick", "crafting_table"]);
    kubejs
        .shapeless("mel:token_base", ["mel:infused_wood", "#axes", "#forge:shears"])
        .damageIngredient(["#axes", "#forge:shears"]);

    kubejs
        .shapeless("botania:spark", ["mel:dream_lantern", "#botania:petals", "#botania:petals", "gold_nugget"])
        .keepIngredient("mel:dream_lantern");

    kubejs
        .shapeless("botania:light_relay", ["mel:dream_lantern", "#botania:petals", "#botania:petals", "botania:spark"])
        .keepIngredient("mel:dream_lantern");

    kubejs.shapeless(
        Item.of(
            "ae2:meteorite_compass",
            '{display:{Name:\'{"translate":"item.mel.maze_compass","bold":true,"italic":false}\'}}'
        ).withLore([
            Text.translate("tooltip.mel.meteorite_compass1").gold().italic(false),
            Text.translate("tooltip.mel.meteorite_compass2").gold().italic(false),
            Text.translate("tooltip.mel.meteorite_compass3").gold().italic(false),
        ]),
        ["minecraft:compass", Item.of("naturesaura:aura_bottle", '{stored_type:"mel:mist"}').strongNBT()]
    );

    kubejs.shapeless("mel:futura_block", "ae2:controller").keepIngredient("ae2:controller");
    kubejs.shapeless("2x botania:blacker_lotus", "botania:blacker_lotus");

    kubejs.shaped("bucket", ["A A", " A "], {
        A: "white_concrete",
    });

    kubejs.shaped("mel:gensousitu_bucket", ["ABC", "D D", " D "], {
        A: "water_bucket",
        B: "naturesaura:calling_spirit",
        C: "lava_bucket",
        D: "white_concrete",
    });

    kubejs.shaped("mel:fire_starter", ["A ", " A"], {
        A: "stick",
    });

    kubejs.shaped("4x chest", ["AAA", "A A", "AAA"], {
        A: "#logs",
    });

    kubejs
        .shaped(Item.of("mel:unstable_ingot", "{Stable:100.0d}"), [" A ", " B ", "C D"], {
            A: "thermal:enderium_ingot",
            B: Item.of("mel:addition_sigil").enchant("mel:activate", 1).strongNBT(),
            C: "thermal:signalum_ingot",
            D: "thermal:lumium_ingot",
        })
        .keepIngredient("mel:unstable_ingot");

    kubejs
        .shaped("mel:colorless_gem", [" A ", " B ", "CDE"], {
            A: "occultism:soul_gem",
            B: Item.of("mel:division_sigil").enchant("mel:activate", 1).strongNBT(),
            C: "botania:dragonstone",
            D: "ars_nouveau:source_gem",
            E: "occultism:spirit_attuned_gem",
        })
        .keepIngredient("mel:division_sigil");

    kubejs.shaped("mel:wooden_shears", [" A", "A "], {
        A: "#planks",
    });

    kubejs.shaped("mel:aura_grinder", ["ABA", "CDC", "ACA"], {
        A: "naturesaura:gold_powder",
        B: "oak_sapling",
        C: "mel:fiber",
        D: "furnace",
    });

    kubejs.shaped("mel:gift_box", ["ABA", "BCB", "ABA"], {
        A: "red_dye",
        B: "naturesaura:gold_powder",
        C: "chest",
    });

    kubejs.shaped("botania:fertilizer", ["ABB", "BB "], {
        A: "bone_meal",
        B: "#botania:petals",
    });

    kubejs.shaped("mel:wrapped_gift", ["ABC", "DEF", "GHI"], {
        A: "stone",
        B: "minecraft:oak_sapling",
        C: "naturesaura:gold_fiber",
        D: "naturesaura:gold_leaf",
        E: "mel:gift_box",
        F: Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:overworld"}').strongNBT(),
        G: "naturesaura:ancient_sapling",
        H: "naturesaura:token_joy",
        I: "naturesaura:calling_spirit",
    });

    kubejs.shaped("4x botania:livingwood_log", ["AA", "AA"], {
        A: "botania:livingwood",
    });

    kubejs.shaped("botania:mana_spreader", ["AAA", "BC ", "AAA"], {
        A: "#botania:livingwood_logs",
        B: "naturesaura:infused_iron",
        C: "#botania:petals",
    });

    kubejs.shaped("grass_block", ["AAA", "AAA", "AAA"], {
        A: "#leaves",
    });

    kubejs.shaped("mel:ancient_aura_generator_core", ["ABA", "BCB", "ABA"], {
        A: "naturesaura:gold_powder",
        B: Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:overworld"}').strongNBT(),
        C: "naturesaura:ancient_bark",
    });

    kubejs.shaped("naturesaura:calling_spirit", [" A ", "A A", " A "], {
        A: "naturesaura:gold_powder",
    });

    kubejs.shaped("ars_nouveau:source_jar", ["AAA", "BCB", "AAA"], {
        A: "ars_nouveau:archwood_slab",
        B: "botania:elf_glass",
        C: "ars_nouveau:source_gem",
    });

    kubejs.shaped("ae2:charger", ["ABA", "A  ", "ABA"], {
        A: "ae2:smooth_quartz_slab",
        B: "botania:elementium_ingot",
    });

    kubejs.shaped("ae2:inscriber", ["ABA", "C A", "ABA"], {
        A: "ae2:smooth_quartz_slab",
        B: "sticky_piston",
        C: "botania:elementium_ingot",
    });

    kubejs.shaped("botania:apothecary_default", ["ABA", " A ", "AAA"], {
        A: "cobblestone",
        B: "poppy",
    });

    kubejs.shaped("occultism:otherworld_goggles", [" A ", "ABA", " C "], {
        A: "ars_nouveau:magebloom_fiber",
        B: "occultism:infused_lenses",
        C: "occultism:lens_frame",
    });

    kubejs.shaped("occultism:soul_gem", [" A ", "ABA", " A "], {
        A: "occultism:iesnium_ingot",
        B: "occultism:spirit_attuned_gem",
    });

    kubejs.shaped("forbidden_arcanus:darkstone", ["AAA", "ABA", "AAA"], {
        A: "occultism:burnt_otherstone",
        B: "occultism:otherstone",
    });

    kubejs.shaped("ae2:quartz_glass", ["ABA", "BAB", "ABA"], {
        A: "ae2:certus_quartz_dust",
        B: "botania:mana_glass",
    });

    kubejs.shaped("mel:assembly_room_controller", ["ABA", "CDE", "AFA"], {
        A: "mekanism:block_steel",
        B: "ae2:calculation_processor",
        C: "ae2:engineering_processor",
        D: "ae2:controller",
        E: "ae2:logic_processor",
        F: "ae2:printed_silicon",
    });

    kubejs.shaped("mel:item_input", ["ABA", "CDE", "AFA"], {
        A: "mekanism:block_steel",
        B: "ae2:cell_component_1k",
        C: "ae2:engineering_processor",
        D: "ae2:interface",
        E: "ae2:logic_processor",
        F: "ae2:printed_silicon",
    });

    kubejs.shaped("mel:item_output", ["AFA", "CDE", "ABA"], {
        A: "mekanism:block_steel",
        B: "ae2:cell_component_1k",
        C: "ae2:engineering_processor",
        D: "ae2:interface",
        E: "ae2:logic_processor",
        F: "ae2:printed_silicon",
    });

    kubejs.shaped("mel:energy_input", ["ABA", "CDE", "AFA"], {
        A: "mekanism:block_steel",
        B: "ae2:cell_component_1k",
        C: "ae2:engineering_processor",
        D: "ae2:energy_acceptor",
        E: "ae2:logic_processor",
        F: "ae2:printed_silicon",
    });

    kubejs.shaped("thermal:machine_press", [" A ", "BCB", "DED"], {
        A: "iron_block",
        B: "thermal:iron_plate",
        C: "thermal:machine_frame",
        D: "thermal:rf_coil",
        E: "thermal:redstone_servo",
    });

    kubejs.shaped("mel:matter_mixer_controller", ["ABA", "EDE", "ACA"], {
        A: "mekanism:block_steel",
        B: "ae2:calculation_processor",
        C: "ae2:logic_processor",
        D: "ae2:controller",
        E: "thermal:iron_gear",
    });

    kubejs.shaped("mel:fluid_input", ["ABA", "CDE", "AFA"], {
        A: "mekanism:block_steel",
        B: "thermal:fluid_cell",
        C: "ae2:engineering_processor",
        D: "ae2:interface",
        E: "ae2:logic_processor",
        F: "ae2:printed_silicon",
    });

    kubejs.shaped("mel:fluid_output", ["AFA", "CDE", "ABA"], {
        A: "mekanism:block_steel",
        B: "thermal:fluid_cell",
        C: "ae2:engineering_processor",
        D: "ae2:interface",
        E: "ae2:logic_processor",
        F: "ae2:printed_silicon",
    });

    kubejs.shaped("wizards_reborn:orbital_fluid_retainer", ["ABA", " C ", "CCC"], {
        A: "thermal:electrum_plate",
        B: "thermal:fluid_cell",
        C: "fluxnetworks:flux_block",
    });

    kubejs.shaped("mel:unstable_singularity", ["AAA", "ABA", "AAA"], {
        A: "mel:unstable_ingot",
        B: "ae2:singularity",
    });

    kubejs.shaped("mel:fired_crucible", ["A A", "A A", "AAA"], {
        A: "white_concrete",
    });

    kubejs.shaped("mel:oak_crucible", ["A A", "A A", "AAA"], {
        A: "oak_log",
    });

    kubejs.shaped("farmingforblockheads:market", ["ABA", "C C", "CCC"], {
        A: "#forge:planks/archwood",
        B: "#forge:dyes/red",
        C: "#forge:logs/archwood",
    });

    kubejs.shaped("thermal:press_gear_die", [" A ", "A A", " A "], {
        A: "thermal:iron_plate",
    });

    kubejs.shaped("thermal:device_tree_extractor", ["AAA", "ABC", "ADA"], {
        A: "thermal:iron_plate",
        B: "mel:oak_crucible",
        C: "naturesaura:color_changer",
        D: "minecraft:comparator",
    });

    kubejs.shaped("mel:colossal_furnace_core", ["AAA", "ABA", "AAA"], {
        A: "furnace",
        B: "cobblestone",
    });

    kubejs.shaped("mel:colossal_furnace_proxy", ["AAA", "ABA", "AAA"], {
        A: "cobblestone",
        B: "furnace",
    });

    kubejs.shaped("mel:cobble_gen_tier1", ["AAA", "BDC", "AAA"], {
        A: "#logs",
        B: "water_bucket",
        C: "lava_bucket",
        D: "glass",
    });

    kubejs.shaped("mel:cobble_gen_tier2", ["AAA", "ABA", "AAA"], {
        A: "cobblestone",
        B: "mel:cobble_gen_tier1",
    });

    kubejs.shaped("mel:cobble_gen_tier3", ["AAA", "ABA", "AAA"], {
        A: "iron_block",
        B: "mel:cobble_gen_tier2",
    });

    kubejs.shaped("mel:cobble_gen_tier4", ["AAA", "ABA", "AAA"], {
        A: "gold_block",
        B: "mel:cobble_gen_tier3",
    });

    kubejs.shaped("mel:cobble_gen_tier5", ["AAA", "ABA", "AAA"], {
        A: "diamond_block",
        B: "mel:cobble_gen_tier4",
    });

    kubejs.shaped("mel:cobble_gen_tier6", ["AAA", "ABA", "AAA"], {
        A: "netherite_block",
        B: "mel:cobble_gen_tier5",
    });

    kubejs.shaped("mel:modular_runic_altar_core", ["ABA", "ACA", "ADA"], {
        A: "ars_nouveau:manipulation_essence",
        B: "botania:rune_mana",
        C: "botania:mana_diamond_block",
        D: "botania:runic_altar",
    });

    kubejs.shaped("mel:void_ore_miner_controller", ["AAA", "ABA", "CCC"], {
        A: "glass",
        B: "ae2:controller",
        C: "mekanism:block_steel",
    });

    kubejs.shaped("3x mekanismgenerators:solar_panel", ["AAA", "BCB", "DDD"], {
        A: "ae2:quartz_vibrant_glass",
        B: "ae2:sky_dust",
        C: "mel:sun_crystal_full",
        D: "ae2:printed_silicon",
    });

    kubejs.shaped("mekanismgenerators:solar_generator", ["AAA", " B ", "BCB"], {
        A: "mekanismgenerators:solar_panel",
        B: "mekanism:ingot_steel",
        C: "ae2:energy_cell",
    });

    kubejs.shaped("mekanismgenerators:advanced_solar_generator", ["ABA", "ABA", "BBB"], {
        A: "mekanismgenerators:solar_generator",
        B: "mekanism:ingot_steel",
    });

    kubejs.shaped("mel:reinforced_stone_frame", ["AAA", " B ", "B B"], {
        A: "pneumaticcraft:reinforced_stone",
        B: "pneumaticcraft:ingot_iron_compressed",
    });

    kubejs.shaped("mel:mana_input", ["ABA", "CDE", "AFA"], {
        A: "mekanism:block_steel",
        B: "ae2:cell_component_1k",
        C: "ae2:engineering_processor",
        D: "botania:mana_pool",
        E: "ae2:logic_processor",
        F: "ae2:printed_silicon",
    });

    kubejs.shaped("mel:pressure_input", ["ABA", "CDE", "AFA"], {
        A: "pneumaticcraft:pressure_chamber_wall",
        B: "pneumaticcraft:pressure_gauge",
        C: "ae2:engineering_processor",
        D: "pneumaticcraft:pressure_tube",
        E: "ae2:logic_processor",
        F: "ae2:printed_silicon",
    });

    kubejs.shaped("mel:oil_drilling_rig_controller", ["ABA", "CDE", "AFA"], {
        A: "pneumaticcraft:pressure_chamber_wall",
        B: "ae2:calculation_processor",
        C: "ae2:engineering_processor",
        D: "pneumaticcraft:small_tank",
        E: "ae2:logic_processor",
        F: "ae2:printed_silicon",
    });

    kubejs.shaped("8x pneumaticcraft:reinforced_stone", ["AAA", "ABA", "AAA"], {
        A: "pneumaticcraft:compressed_stone",
        B: "pneumaticcraft:compressed_iron_block",
    });

    kubejs.shaped("naturesaura:pet_reviver", ["A A", "BCB", " D "], {
        A: "naturesaura:gold_leaf",
        B: "naturesaura:sky_ingot",
        C: "naturesaura:token_joy",
        D: "minecraft:gold_block",
    });
});
