ServerEvents.recipes((event) => {
    const { thermal } = event.recipes;

    ingotChiller("thermal:enderium_ingot", "thermal:ender");
    ingotChiller("thermal:lumium_ingot", "mel:molten_lumium");
    ingotChiller("thermal:signalum_ingot", "mel:molten_signalum");

    function ingotChiller(output, input, energy) {
        event.custom({
            type: "thermal:chiller",
            ingredients: [
                {
                    fluid: input,
                    amount: 1000,
                },
                {
                    item: "thermal:chiller_ingot_cast",
                },
            ],
            result: [
                {
                    item: output,
                    count: 1,
                },
            ],
            energy: energy ? energy : 80000,
        });
    }

    thermal.pulverizer("forbidden_arcanus:mundabitur_dust", "mel:colorless_gem");
    thermal.refinery("thermal:rubber", Fluid.of("thermal:latex", 100));
});
