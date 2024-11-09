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
