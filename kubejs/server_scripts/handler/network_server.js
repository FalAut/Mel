NetworkEvents.dataReceived("portable_crafting", (event) => {
    const { data, player } = event;

    if (data.getBoolean("portable_crafting")) {
        let test1 = player.inventory.allItems.some((item) => item == "mel:portable_crafting_table");
        let test2 = hasCurios(player, "mel:portable_crafting_table");

        if (test1 || test2) {
            openCraftingMenu(player);
        }
    }
});