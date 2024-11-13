// priority: 99
const FOG_AURA_COST = 1000;

const $PatchouliAPI = Java.loadClass("vazkii.patchouli.api.PatchouliAPI").get();
const $Spawner = Java.loadClass("snownee.loquat.spawner.Spawner");
const $NaturesAuraAPI = Java.loadClass("de.ellpeck.naturesaura.api.NaturesAuraAPI");
const $CuriosApi = Java.loadClass("top.theillusivec4.curios.api.CuriosApi");
const $Integer = Java.loadClass("java.lang.Integer");
const $StructurePlaceSettings = Java.loadClass(
    "net.minecraft.world.level.levelgen.structure.templatesystem.StructurePlaceSettings"
);
const $ResourceKey = Java.loadClass("net.minecraft.resources.ResourceKey");
const DAMAGE_TYPE = $ResourceKey.createRegistryKey("damage_type");
