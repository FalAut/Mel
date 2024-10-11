function processDreamLantern(item) {
    if (item == "mel:dream_lantern") {
        let dreamLantern = item.getCapability($NaturesAuraAPI.CAP_AURA_CONTAINER).resolve().get();
        if (dreamLantern.storedAura >= FOG_AURA_COST) {
            dreamLantern.drainAura(FOG_AURA_COST, false);
            Client.player.persistentData.putBoolean("has_dream_lantern", true);
            return true;
        }
    }
    return false;
}

function getFirstBlockAbove(level, pos) {
    let posCurrent = null;
    for (let y = pos.getY() + 1; y < level.getMaxBuildHeight(); y++) {
        posCurrent = new BlockPos(pos.getX(), y, pos.getZ());
        if (
            level.getBlockState(posCurrent).isAir() &&
            level.getBlockState(posCurrent.above()).isAir() &&
            !level.getBlockState(posCurrent.below()).isAir()
        ) {
            return posCurrent;
        }
    }
    return null;
}
