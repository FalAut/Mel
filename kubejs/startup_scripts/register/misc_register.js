StartupEvents.postInit((event) => {
    new $BasicAuraType(
        new ResourceLocation("mel", "mist"),
        $ResourceKey.create($ResourceKey.createRegistryKey("dimension_type"), "mel:misty_forest"),
        0xb0c4de,
        0
    ).register();
});

StartupEvents.registry("enchantment", (event) => {
    event.create("mel:activate").displayName("激活");
});

StartupEvents.postInit((event) => {
    $CustomPortalBuilder
        .beginPortal()
        ["frameBlock(net.minecraft.resources.ResourceLocation)"]("minecraft:grass_block")
        .destDimID("mel:misty_forest")
        .customPortalBlock(Block.getBlock("mel:misty_forest_portal"))
        .tintColor(255, 255, 255)
        .flatPortal()
        .forcedSize(2, 2)
        .lightWithItem("bedrock")
        .onlyLightInOverworld()
        .registerPortal();
});
