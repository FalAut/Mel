PlayerEvents.tick((event) => {
    const { player } = event;
    if (player.age % 20) return;

    player.paint({
        playtime_counter: {
            type: "text",
            color: "gray",
            alignY: "bottom",
        },
    });

    player.paint({ playtime_counter: { text: convertTime(player.stats.playTime) } });

    player.setFoodLevel(20);
    player.setSaturation(20);

    player.inventory.allItems.forEach((item) => {
        if (item == "mel:unstable_ingot") {
            if (!item.nbt) return;
            let stable = item.nbt.getInt("Stable");
            item.nbt.putInt("Stable", stable - 10);

            if (stable <= 10) {
                item.count--;
                player.block.createExplosion().explosionMode("none").strength(5).explode();
            }
        }
    });

    if (player.level.dimension == "mel:misty_forest") {
        let foundDreamLamp = player.inventory.allItems.some((item) => processDreamLantern(item, player));

        if (!foundDreamLamp) {
            let curiosInventory = $CuriosApi.getCuriosInventory(player).resolve().get();
            foundDreamLamp = curiosInventory.equippedCurios.allItems.some((item) => processDreamLantern(item, player));
        }

        if (!foundDreamLamp) {
            player.sendData("has_dream_lantern", { hasDreamLantern: false });
            player.attack(10);
        }
    }
});

function convertTime(playTime) {
    const totalSeconds = Math.floor(playTime / 20);

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    let result;
    if (seconds > 0) result = Text.translate("mel.time.seconds", seconds.toFixed(0)).getString();
    if (minutes > 0) result = Text.translate("mel.time.minutes", minutes.toFixed(0)).getString();
    if (hours > 0) result = Text.translate("mel.time.hours", hours.toFixed(0)).getString();
    if (days > 0) result = Text.translate("mel.time.days", days.toFixed(0)).getString();

    return result || "";
}
