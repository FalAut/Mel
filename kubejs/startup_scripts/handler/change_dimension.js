ForgeEvents.onEvent("net.minecraftforge.event.entity.EntityTravelToDimensionEvent", (event) => {
    const { entity, dimension } = event;
    if (!entity.isPlayer() || dimension.location() != "minecraft:the_nether") return;
    /**@type {Internal.Player} */
    const player = entity;
    let tokenSlot = player.inventory.findSlotMatchingItem("naturesaura:token_rage");
    if (tokenSlot == -1) {
        player.tell("你需要狂怒印记才能进入下界");
        event.setCanceled(true);
    }
    // else {
    //    player.inventory.getStackInSlot(tokenSlot).count--;
    // }
});
