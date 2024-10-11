StartupEvents.registry("block", (event) => {
    event.create("mel:aura_grinder", "custommachinery");
    event.create("mel:engraving_table", "custommachinery");
    event.create("mel:dream_block").hardness(0).soundType("amethyst");
    event.create("mel:infused_wood").hardness(2).tag("minecraft:mineable/axe").woodSoundType();
    event.create("mel:maze_block").unbreakable().textureAll("block/gray_concrete").noValidSpawns(true);
    event.create("mel:mana_string_block").hardness(0.8).soundType("wool");
    event.create("mel:futura_block").hardness(1).tag("minecraft:needs_iron_tool").soundType("metal");
    event.create("mel:datura").hardness(0).defaultCutout().cropSoundType().noCollision().noItem();

    event.create("mel:ancient_aura_generator_core").blockEntity((info) => {
        info.enableSync();
        info.serverTick(20, 0, (be) => {
            global.AncientAuraGenerator(be);
        });
    });

    event
        .create("mel:source_flower")
        .tag("minecraft:flowers")
        .box(4.8, 0, 4.8, 12.8, 16, 12.8)
        .grassSoundType()
        .hardness(0)
        .defaultCutout()
        .noCollision()
        .blockEntity((info) => {
            info.serverTick(1, 0, (be) => {
                global.sourceFlower(be);
            });
        });

    event
        .create("mel:flowing_source_flower")
        .grassSoundType()
        .hardness(0.5)
        .defaultCutout()
        .box(1.6, 1.6, 1.6, 14.4, 14.4, 14.4)
        .blockEntity((info) => {
            info.serverTick(1, 0, (be) => {
                global.sourceFlower(be);
            });
        });

    event
        .create("mel:source_fluidlink")
        .box(1.6, 1.6, 1.6, 14.4, 14.4, 14.4)
        .defaultCutout()
        .blockEntity((info) => {
            info.serverTick(20, 0, (be) => {
                global.SourceFluidLink(be);
            });
        });

    event.createCustom(
        "mel:misty_forest_portal",
        () =>
            new $CustomPortalBlock(
                $BlockBehaviour$Properties
                    .copy(Blocks.NETHER_PORTAL)
                    .noCollission()
                    .strength(-1)
                    .sound(SoundType.GLASS)
                    .lightLevel((state) => 11)
            )
    );
});
