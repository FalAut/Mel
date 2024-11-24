MBDMachineEvents.onBeforeRecipeWorking("mel:fired_crucible", (event) => {
    const { machine } = event.event;
    const heatSource = machine.level.getBlock(machine.pos.below());

    if (!heatSource.hasTag("mel:crucible_heat_source")) {
        event.event.setCanceled(true);
    }
});

ServerEvents.recipes((event) => {
    Object.entries(JsonIO.read("kubejs/fuel_items.json")).forEach(([itemId, burnTime]) => {
        let recipe = event.recipes.mbd2.proxy_smelting();

        recipe.isFuel(true);
        recipe.slotName("fuel_input", (builder) => {
            builder.inputItems(itemId);
        });
        recipe.duration(burnTime);
    });
});

MBDMachineEvents.onBeforeRecipeModify("mbd2:colossal_furnace_controller", (event) => {
    const info = event.event;
    const { machine, recipe } = info;

    let cap = machine.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null);
    let furnaceCount = cap.getStackInSlot(27).count;

    let parallelRecipe = machine.applyParallel(recipe, furnaceCount);
    let copyRecipe = parallelRecipe.copy();
    let reductionFactor = Math.max(1 - 0.01 * furnaceCount, 0.1);
    copyRecipe.duration = Math.ceil(recipe.duration * reductionFactor);

    info.setRecipe(copyRecipe);
});
