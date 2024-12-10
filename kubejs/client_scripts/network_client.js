NetworkEvents.dataReceived("has_dream_lantern", (event) => {
    const { data, player } = event;
    const hasDreamLantern = data.getBoolean("hasDreamLantern");

    if (hasDreamLantern) {
        player.persistentData.putBoolean("has_dream_lantern", true);
    } else {
        player.persistentData.putBoolean("has_dream_lantern", false);
    }
});

NetworkEvents.dataReceived("display_item_activation", (event) => {
    const { data } = event;

    if (data.displayItem) {
        Client.gameRenderer.displayItemActivation(data.displayItem);
    }
});

ClientEvents.tick((event) => {
    if (global.CraftingKey.consumeClick()) {
        event.player.sendData("portable_crafting", { portable_crafting: true });
    }
});

// 1111
ClientEvents.loggedIn((event) => {
    let isFlatField = $ClientLevelData.__javaObject__.getDeclaredField("f_104832_");

    isFlatField.setAccessible(true);
    isFlatField.setBoolean(event.level.levelData, true);
});
