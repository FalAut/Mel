NetworkEvents.dataReceived("has_dream_lantern", (event) => {
    const { data, player } = event;
    const hasDreamLantern = data.getBoolean("hasDreamLantern");

    if (hasDreamLantern) {
        player.persistentData.putBoolean("has_dream_lantern", true);
    } else {
        player.persistentData.putBoolean("has_dream_lantern", false);
    }
});