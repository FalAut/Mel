StartupEvents.postInit((event) => {
    if (!Platform.isClientEnvironment()) return;
    const $ItemProperties = Java.loadClass("net.minecraft.client.renderer.item.ItemProperties");

    $ItemProperties.register("mel:sun_crystal", "solar", (stack, world, living, seed) =>
        stack.nbt && stack.nbt.contains("Solar") ? stack.nbt.getInt("Solar") / 100 : 0
    );
    $ItemProperties.register("mel:unstable_ingot", "stable", (stack, world, living, seed) =>
        stack.nbt && stack.nbt.contains("Stable") ? stack.nbt.getInt("Stable") / 100 : 0
    );
});
