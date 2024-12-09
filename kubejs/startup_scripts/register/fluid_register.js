StartupEvents.registry("fluid", (event) => {
    const gensousitu = event.create("mel:gensousitu").thinTexture(0xffffff);
    gensousitu.attributes = gensousitu.createAttributes().convertToSource(true);

    event.create("mel:liquid_mana").thinTexture(0x87ceeb);
    event.create("mel:liquid_source").thinTexture(0x800080);
    event.create("mel:molten_ender").thinTexture(0x0f594d);
    event.create("mel:molten_lumium");
    event.create("mel:molten_signalum");
    event.create("mel:ether_memory_source");
    event.create("mel:pink_memory_source");
});
