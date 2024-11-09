MBDMachineEvents.onBeforeRecipeWorking("mel:fired_crucible", (event) => {
    const { machine } = event.event;
    const heatSource = machine.level.getBlock(machine.pos.below());

    if (!heatSource.hasTag("mel:crucible_heat_source")) {
        event.event.setCanceled(true);
    }
});
