ServerEvents.recipes((event) => {
    event.custom({
        type: "mekanism:crushing",
        input: { ingredient: { item: "mel:colorless_gem" } },
        output: { item: "forbidden_arcanus:mundabitur_dust" },
    });
});
