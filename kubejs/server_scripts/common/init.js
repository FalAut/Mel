// priority: 9

ServerEvents.loaded((event) => {
    const { server } = event;

    if (!server.persistentData.getBoolean("first_load")) {
        server.gameRules.set("keepInventory", "true");
        server.gameRules.set("doInsomnia", "false");
        server.gameRules.set("doTraderSpawning", "false");
        server.gameRules.set("doWeatherCycle", "false");
        server.gameRules.set("doDaylightCycle", "false");

        server.getLevel("minecraft:overworld").setDayTime(6000);
        server.persistentData.putBoolean("first_load", true);
    }
});

// ServerEvents.loaded((event) => {
//     let fuelItems = {};

//     Ingredient.all.stacks.forEach((itemStack) => {
//         const burnTime = $ForgeHooks.getBurnTime(itemStack, "minecraft:smelting");

//         if (burnTime > 0) {
//             fuelItems[itemStack.id] = burnTime;
//         }
//     });

//     JsonIO.write("kubejs/fuel_items.json", fuelItems);
// });

// ItemEvents.rightClicked("stick", (event) => {
//     let allItems = Ingredient.all.stacks.toArray();
//     let randomIndex = Utils.random.nextInt(allItems.length);
//     let randomItem = allItems[randomIndex];

//     event.player.give(randomItem);
// });
