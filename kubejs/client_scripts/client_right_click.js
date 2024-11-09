BlockEvents.rightClicked((event) => {
    const { hand, item, block } = event;
    if (hand != "MAIN_HAND") return;

    if (block == "mel:fired_crucible" || block == "mel:oak_crucible") {
        if (item.hasTag("leaves") || item == "gray_concrete") {
            event.cancel();
        }
    }
});
