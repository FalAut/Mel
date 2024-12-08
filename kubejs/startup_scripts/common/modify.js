BlockEvents.modification((event) => {
    event.modify(
        [
            "mel:memory_source_drawing_crystal_core",
            "botania:bifrost_perm",
            "botania:light_relay",
            "forbidden_arcanus:dark_nether_star_block",
            "ae2:quartz_vibrant_glass",
        ],
        (block) => {
            block.setExplosionResistance(1200);
        }
    );
});
