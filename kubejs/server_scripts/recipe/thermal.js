ServerEvents.recipes((event) => {
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

    event.custom({
        type: "thermal:pulverizer",
        ingredient: {
            value: [
                {
                    item: "mel:colorless_gem",
                },
            ],
            count: 1,
        },
        result: [
            {
                item: "forbidden_arcanus:mundabitur_dust",
                count: 1,
            },
        ],
    });
});
