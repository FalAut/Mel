NetworkEvents.dataReceived("server", (event) => {
    const { data, player } = event;

    if (data.getBoolean("portable_crafting")) {
        let test1 = player.inventory.allItems.some((item) => item == "mel:portable_crafting_table");
        let test2 = hasCurios(player, "mel:portable_crafting_table");
        console.log(test1);
        console.log(test2);
        if (test1 || test2) {
            openCraftingMenu(player);
        }
    }
});
