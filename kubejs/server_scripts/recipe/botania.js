ServerEvents.recipes((event) => {
    const { botania, mbd2 } = event.recipes;

    botania.petal_apothecary("naturesaura:aura_bloom", Array(4).fill("naturesaura:gold_powder"));
    botania.petal_apothecary("botania:pure_daisy", Array(4).fill("#botania:petals/white"), "naturesaura:gold_powder");
    botania.petal_apothecary("mel:source_flower", Array(4).fill("ars_nouveau:source_gem"), "naturesaura:gold_powder");
    botania.petal_apothecary("botania:mutated_seeds", Array(4).fill("botania:black_lotus"), "botania:grass_seeds");

    /**
     * 符文祭坛
     * @param {OutputItem_} output
     * @param {InputItem_} input
     * @param {number} mana
     */
    function runicAltar(output, input, mana) {
        botania.runic_altar(output, input, mana ? mana : 5200);

        mbd2.modular_runic_altar()
            .outputItems(output)
            .inputItems(input)
            .inputMana(mana ? mana : 5200);
    }

    runicAltar("2x botania:rune_air", [
        "botania:mana_diamond",
        "botania:manasteel_ingot",
        "botania:mana_powder",
        "naturesaura:sky_ingot",
        Item.of("naturesaura:aura_bottle", '{stored_type:"mel:mist"}').strongNBT(),
    ]);

    runicAltar("2x botania:rune_water", [
        "botania:mana_diamond",
        "botania:manasteel_ingot",
        "botania:mana_powder",
        "ars_nouveau:frostaya_pod",
        "ars_nouveau:blue_archwood_log",
    ]);

    runicAltar("2x botania:rune_earth", [
        "botania:mana_diamond",
        "botania:manasteel_ingot",
        "botania:mana_powder",
        "ars_nouveau:mendosteen_pod",
        "ars_nouveau:green_archwood_log",
    ]);

    runicAltar("2x botania:rune_mana", [
        "botania:mana_diamond",
        "botania:manasteel_ingot",
        "botania:mana_powder",
        "ars_nouveau:bastion_pod",
        "ars_nouveau:purple_archwood_log",
    ]);

    runicAltar("2x botania:rune_fire", [
        "botania:mana_diamond",
        "botania:manasteel_ingot",
        "botania:mana_powder",
        "ars_nouveau:bombegranate_pod",
        "ars_nouveau:red_archwood_log",
    ]);

    runicAltar(
        "botania:alchemy_catalyst",
        [
            "botania:mana_diamond",
            "botania:manasteel_ingot",
            "botania:mana_powder",
            "mel:sun_crystal_full",
            "naturesaura:token_euphoria",
            "naturesaura:gold_leaf",
        ],
        25000
    );

    runicAltar(
        "botania:terra_plate",
        [
            "mel:sun_crystal_full",
            "minecraft:lapis_block",
            "botania:rune_fire",
            "botania:rune_earth",
            "botania:rune_mana",
            "botania:rune_air",
            "botania:rune_water",
            "minecraft:lapis_block",
        ],
        50000
    );

    /**
     * 泰拉凝聚
     * @param {OutputItem_} output
     * @param {InputItem_} input
     * @param {number} mana
     */
    function terriaAgglomeration(output, input, mana) {
        mana = mana ? mana : 500000;

        botania.terra_plate(output, input, mana);

        let duration = mana / 2000;
        let inputMana = mana / duration;

        mbd2.modular_terrestrial_agglomeration()
            .outputItems(output)
            .inputItems(input)
            .duration(duration)
            .perTick(true)
            .inputMana(inputMana);
    }

    terriaAgglomeration("botania:alfheim_portal", [
        "botania:rune_mana",
        "mel:sun_crystal_full",
        "naturesaura:calling_spirit",
        "botania:livingwood",
        "botania:terrasteel_ingot",
    ]);

    terriaAgglomeration("botania:terrasteel_ingot", [
        "naturesaura:infused_iron",
        "botania:mana_pearl",
        "botania:mana_diamond",
        "botania:mana_powder",
        "botania:manasteel_ingot",
        "botania:quartz_mana",
        "botania:mana_glass",
        "botania:mana_string",
    ]);

    terriaAgglomeration(
        "3x ars_nouveau:arcane_pedestal",
        [
            "botania:dragonstone",
            "botania:elementium_ingot",
            "botania:shimmerrock",
            "botania:shimmerrock",
            "botania:shimmerrock",
            "botania:shimmerrock",
            "botania:pixie_dust",
        ],
        25000
    );

    terriaAgglomeration(
        "ars_nouveau:imbuement_chamber",
        [
            "botania:dragonstone",
            "botania:elementium_ingot",
            "ars_nouveau:archwood_planks",
            "ars_nouveau:archwood_planks",
            "ars_nouveau:archwood_planks",
            "ars_nouveau:archwood_planks",
            "botania:pixie_dust",
        ],
        25000
    );

    terriaAgglomeration(
        "ae2:mysterious_cube",
        [
            "botania:elementium_ingot",
            "botania:pixie_dust",
            "botania:dragonstone",
            "ae2:sky_stone_block",
            "botania:rune_mana",
        ],
        50000
    );

    terriaAgglomeration(
        "ars_nouveau:enchanting_apparatus",
        [
            "ars_nouveau:sourcestone",
            "ars_nouveau:sourcestone",
            "ars_nouveau:source_gem",
            "ars_nouveau:source_gem",
            "minecraft:gold_ingot",
            "minecraft:gold_ingot",
            "minecraft:gold_ingot",
            "minecraft:gold_ingot",
        ],
        50000
    );

    terriaAgglomeration(
        "ars_nouveau:arcane_core",
        [
            "ars_nouveau:sourcestone",
            "ars_nouveau:sourcestone",
            "ars_nouveau:source_gem_block",
            "minecraft:gold_block",
            "ars_nouveau:archwood_planks",
            "ars_nouveau:archwood_planks",
            "ars_nouveau:archwood_planks",
            "ars_nouveau:archwood_planks",
        ],
        50000
    );

    botania.elven_trade("botania:dragonstone", ["botania:mana_diamond", "botania:mana_diamond"]);
    botania.elven_trade("botania:pixie_dust", ["botania:mana_powder", "botania:mana_powder"]);
    botania.elven_trade("ae2:certus_quartz_crystal", ["botania:quartz_mana", "botania:quartz_mana"]);
    botania.elven_trade("ae2:sky_stone_block", "botania:livingrock");
    /**
     * @param {OutputItem_} output
     * @param {InputItem_} input
     * @param {number} mana
     */
    function alchemyMana(output, input, mana) {
        event.custom({
            type: "botania:mana_infusion",
            catalyst: {
                type: "block",
                block: "botania:alchemy_catalyst",
            },
            input: {
                item: input,
            },
            mana: mana ? mana : 2000,
            output: {
                item: output,
            },
        });
    }

    alchemyMana("minecraft:glowstone_dust", "minecraft:redstone");
    alchemyMana("minecraft:amethyst_shard", "minecraft:emerald");
    alchemyMana("minecraft:ender_pearl", "minecraft:amethyst_shard");
    alchemyMana("minecraft:quartz", "minecraft:lapis_lazuli");

    /**
     * @param {OutputItem_} output
     * @param {InputItem_} input
     * @param {number} mana
     */
    function conjurationMana(output, input, mana) {
        event.custom({
            type: "botania:mana_infusion",
            catalyst: {
                type: "block",
                block: "botania:conjuration_catalyst",
            },
            input: {
                item: input,
            },
            mana: mana ? mana : 2000,
            output: {
                item: output,
                count: 2,
            },
        });
    }

    conjurationMana("string", "string");

    event.custom({
        type: "botania:mana_infusion",
        input: {
            item: "botania:grass_seeds",
        },
        mana: 2000,
        output: {
            item: "botania:infused_seeds",
        },
    });

    event.custom({
        type: "botania:pure_daisy",
        input: {
            type: "block",
            block: "mel:infused_wood",
        },
        output: {
            name: "botania:livingwood",
        },
    });

    event.custom({
        type: "botania:pure_daisy",
        input: {
            type: "block",
            block: "naturesaura:infused_stone",
        },
        output: {
            name: "botania:livingrock",
        },
    });
});
