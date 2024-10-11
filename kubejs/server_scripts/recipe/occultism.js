ServerEvents.recipes((event) => {
    const { occultism } = event.recipes;

    occultism.spirit_fire("occultism:otherworld_ashes", "occultism:otherstone");
    occultism.spirit_fire("occultism:spirit_attuned_gem", "ars_nouveau:source_gem");
    occultism.spirit_fire("occultism:candle_white", "minecraft:torch");
});
