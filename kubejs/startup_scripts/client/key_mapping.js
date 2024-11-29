const $KeyMapping = Java.loadClass("net.minecraft.client.KeyMapping");

global.CraftingKey = new $KeyMapping("key.mel.portable_crafting", 67, "key.categories.inventory");

ForgeModEvents.onEvent("net.minecraftforge.client.event.RegisterKeyMappingsEvent", (event) => {
    event.register(global.CraftingKey);
});
