ForgeEvents.onEvent("vazkii.botania.api.recipe.ElvenPortalUpdateEvent", (event) => {
    global.ElvenPortalUpdateEvent(event);
});

/**
 *
 * @param {Internal.ElvenPortalUpdateEvent} event
 */
global.ElvenPortalUpdateEvent = (event) => {
    const { portalTile } = event;
    const { level } = portalTile;

    if (level.isClientSide() || level.server.tickCount % 20 || !event.isOpen()) return;
    let pos = portalTile.blockPos.above(2);
    let coords = getCoordsToPutElven(level, pos);

    if (coords != null && level.getBlock(coords).id == "botania:livingrock") {
        level.destroyBlock(coords, false);
        level.setBlock(coords, Block.getBlock("botania:shimmerrock").defaultBlockState(), 2);
    }
};

/**
 * @param {Internal.Level} level
 * @param {BlockPos} block
 * @returns {BlockPos}
 */
function getCoordsToPutElven(level, blockPos) {
    let possibleCoords = [];
    let RANGE = 5;

    for (let i = -RANGE; i <= RANGE; i++) {
        for (let j = -RANGE; j <= RANGE; j++) {
            for (let k = -RANGE; k <= RANGE; k++) {
                if (blockPos == null) return null;

                let pos = blockPos.offset(i, j, k);
                let state = level.getBlockState(pos);

                if (state.block.idLocation == "botania:livingrock") {
                    possibleCoords.push(pos);
                }
            }
        }
    }

    if (possibleCoords.length == 0) return null;

    return possibleCoords[level.random.nextInt(possibleCoords.length)];
}
