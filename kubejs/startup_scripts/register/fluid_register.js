StartupEvents.registry("fluid", (event) => {
    let dreamFluid = event
        .create("mel:dream_fluid")
        .stillTexture("mel:block/dream_fluid")
        .flowingTexture("mel:block/dream_fluid");
    dreamFluid.attributes = dreamFluid.createAttributes().tickDelay(1).convertToSource(true);

    event.create("mel:liquid_mana").thinTexture(0x87ceeb);
    event.create("mel:liquid_source").thinTexture(0x800080);
    event.create("mel:molten_ender").thinTexture(0x0f594d);
    event.create("mel:molten_lumium").thickTexture(0xffdf33);
    event.create("mel:molten_signalum").thickTexture(0xe02b50);
});
