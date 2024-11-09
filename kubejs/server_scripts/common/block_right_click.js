BlockEvents.rightClicked((event) => {
    const { hand, block, item, player } = event;
    if (block != "mel:oak_crucible" || hand != "MAIN_HAND") return;

    const itemCap = block.entity.getCapability(ForgeCapabilities.ITEM_HANDLER).resolve().get();
    const fluidCap = block.entity.getCapability(ForgeCapabilities.FLUID_HANDLER).resolve().get();

    if (item.hasTag("leaves")) {
        if (itemCap.getStackInSlot(0).count < 64) {
            itemCap.insertItem(item.withCount(1), false);
            item.count--;
        }
        player.swing();
        event.cancel();
    }

    if (item.isEmpty() && player.isCrouching()) {
        player.give(itemCap.getStackInSlot(0).withCount(1));
        itemCap.extractItem(0, 1, false);
        player.swing();
    }

    if (item == "bucket" && fluidCap.getFluidInTank(0).amount >= 1000) {
        fluidCap.drain(Fluid.water(), "execute");
        player.give("water_bucket");
        item.count--;
        player.swing();
    }
});

BlockEvents.rightClicked((event) => {
    const { hand, block, item, player } = event;
    if (block != "mel:fired_crucible" || hand != "MAIN_HAND") return;

    const itemCap = block.entity.getCapability(ForgeCapabilities.ITEM_HANDLER).resolve().get();
    const fluidCap = block.entity.getCapability(ForgeCapabilities.FLUID_HANDLER).resolve().get();

    if (item == "gray_concrete") {
        if (itemCap.getStackInSlot(0).count < 64) {
            itemCap.insertItem(item.withCount(1), false);
            item.count--;
        }
        player.swing();
        event.cancel();
    }

    if (item.isEmpty() && player.isCrouching()) {
        player.give(itemCap.getStackInSlot(0).withCount(1));
        itemCap.extractItem(0, 1, false);
        player.swing();
    }

    if (item == "bucket" && fluidCap.getFluidInTank(0).amount >= 1000) {
        fluidCap.drain(Fluid.lava(), "execute");
        player.give("lava_bucket");
        item.count--;
        player.swing();
    }
});
