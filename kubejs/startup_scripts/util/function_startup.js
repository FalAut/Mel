/**
 * @param {Internal.Level} level
 * @param {BlockPos} block
 * @returns {BlockPos}
 */
function getCoordsToPut(level, blockPos) {
    const RANGE = 3;
    let possibleCoords = [];

    for (let i = -RANGE; i <= RANGE; i++) {
        for (let j = -RANGE; j <= RANGE; j++) {
            for (let k = -RANGE; k <= RANGE; k++) {
                if (blockPos == null) return null;

                let pos = blockPos.offset(i, j, k);
                let state = level.getBlockState(pos);

                if (state.block instanceof $LeavesBlock) {
                    possibleCoords.push(pos);
                }
            }
        }
    }

    if (possibleCoords.length == 0) return null;

    return possibleCoords[level.random.nextInt(possibleCoords.length)];
}

function toggleFlying(player, enable) {
    if (player.isCreative() || player.isSpectator()) return;

    if (player.abilities.mayfly != enable) {
        player.abilities.mayfly = enable;
        if (!enable) player.abilities.flying = false;
        player.onUpdateAbilities();
    }
}

/**
 * @param {Internal.LivingEntity} entity
 * @returns {Internal.BlockContainerJS}
 */
function getRayTraceBlock(entity) {
    const block = entity.rayTrace().block;
    if (block?.blockState?.fluidState?.fluidType == "minecraft:empty") {
        return block;
    }
    return null;
}
