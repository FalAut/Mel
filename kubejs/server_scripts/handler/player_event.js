PlayerEvents.tick((event) => {
    const { player, level } = event;
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
            if (!item.nbt) {
                item.setNbt({ Stable: 100 });
            }

            let stable = item.nbt.getInt("Stable");
            item.nbt.putInt("Stable", stable - 10);

            if (stable <= 10) {
                item.count--;
                player.block.createExplosion().explosionMode("none").strength(5).explode();
            }
        }
    });

    if (level.dimension == "mel:misty_forest") {
        let foundDreamLamp = player.inventory.allItems.some((item) => processDreamLantern(item, player));

        if (!foundDreamLamp) {
            let curiosInventory = $CuriosApi.getCuriosInventory(player).orElse(null);
            foundDreamLamp = curiosInventory.equippedCurios.allItems.some((item) => processDreamLantern(item, player));
        }

        if (!foundDreamLamp) {
            player.sendData("has_dream_lantern", { hasDreamLantern: false });
            player.attack(getDamageSource(level, "mel:mist"), 10);
        }
    }
});

EntityEvents.death("player", (event) => {
    const { source } = event;
    const /**@type {Internal.ServerPlayer} */ player = event.player;

    if (source.getType() == "mistDamage" && !player.isAdvancementDone("mel:mist_die")) {
        player.unlockAdvancement("mel:mist_die");
    }
});
