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

MBDMachineEvents.onBeforeRecipeModify("mel:colossal_furnace_core", (event) => {
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

MBDMachineEvents.onTick("mel:memory_source_drawing_crystal_core", (event) => {
    const { machine } = event.event;
    const { level, pos } = machine;

    if (!$IMultiController.ofController(level, pos).orElse(null).isFormed()) return;
    machine.triggerGeckolibAnim("formed");

    const { x, y, z } = pos;
    let aabb = AABB.of(x - 2, y + 6 - 2, z - 2, x + 2, y + 6 + 2, z + 2);
    let entities = level.getEntitiesWithin(aabb);

    for (let entity of entities) {
        if (entity.type == "minecraft:wither" || entity.type == "botania:pink_wither") {
            entity.setNoAi(true);
            level.getPlayers().forEach((player) => entity.stopSeenByPlayer(player));

            if (machine.machineStateName == "working") {
                if (entity.getHealth() >= 150) {
                    entity.attack(entity.damageSources().generic(), 5);
                    entity.setInvulnerableTicks(0);
                } else {
                    entity.setInvulnerableTicks(100);
                    entity.heal(1);
                }
            }
        }
    }
});

// let cobbleGens = [
//     "mel:cobble_gen_tier1",
//     "mel:cobble_gen_tier2",
//     "mel:cobble_gen_tier3",
//     "mel:cobble_gen_tier4",
//     "mel:cobble_gen_tier5",
//     "mel:cobble_gen_tier6",
// ];

// MBDMachineEvents.onTick(cobbleGens, (event) => {
//     const { machine } = event.event;
//     const { pos, customData, level } = machine;
//     const ticksExisted = (customData.getInt("ticksExisted") || 0) + 1;
//     customData.putInt("ticksExisted", ticksExisted);
//     if (ticksExisted % 20 != 0) return;

//     const upBlock = level.getBlock(pos.above());
//     if (!upBlock.entity) return;

//     let machinecap = machine.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null);
//     let upCap = upBlock.entity.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null);

//     if (!upCap) return;

//     let isFull = true;
//     for (let slot = 0; slot < upCap.slots; slot++) {
//         let stackInSlot = upCap.getStackInSlot(slot);
//         let maxStackSize = stackInSlot.getMaxStackSize();
//         let currentStackSize = stackInSlot.getCount();

//         if (stackInSlot.isEmpty() || currentStackSize < maxStackSize) {
//             isFull = false;
//             break;
//         }
//     }

//     if (isFull) return;

//     for (let slot = 0; slot < machinecap.slots; slot++) {
//         let extractItem = machinecap.extractItem(slot, 1, false);
//         if (!extractItem.isEmpty()) {
//             upCap.insertItem(extractItem, false);
//         }
//     }
// });
