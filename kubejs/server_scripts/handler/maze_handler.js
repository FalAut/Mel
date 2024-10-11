LoquatEvents.playerEnteredArea((event) => {
    const { area, player, areaManager } = event;
    const { tags } = area;
    if (player.spectator) return;
    let startRoom = areaManager.byTag("start_room").findFirst().orElse(null);

    // TODO: 把start end room的maze标签删了
    if (tags.contains("maze") && !tags.contains("start_room") && !tags.contains("end_room")) {
        player.tell(Text.gray("一股神秘的力量将你拖进了迷宫"));
        player.teleportTo(startRoom.center.x(), startRoom.center.y(), startRoom.center.z());
    }

    if (tags.contains("end_room")) {
        player.tell(Text.gold("你到达了迷宫的出口，右键神秘方块即可逃离迷宫"));
    }
});

ItemEvents.rightClicked((event) => {
    const { item, hand, level } = event;
    if (item != "ae2:meteorite_compass" || hand != "MAIN_HAND" || level.dimension != "mel:misty_forest") return;
    const mazeEndRoom = LoquatAreaManager.of(level).byTag("end_room").findFirst().orElse(null);

    level.setBlock(
        new BlockPos(mazeEndRoom.center.x(), mazeEndRoom.center.y(), mazeEndRoom.center.z()),
        Block.getBlock("ae2:mysterious_cube").defaultBlockState(),
        3
    );
});

BlockEvents.rightClicked((event) => {
    const { hand, block, level, player } = event;
    if (block != "ae2:mysterious_cube" || hand != "MAIN_HAND" || level.dimension != "mel:misty_forest") return;
    let areas = LoquatAreaManager.of(level).byPosition(block.pos);
    areas.forEach((area) => {
        if (area.tags.contains("end_room")) {
            let earthPos = getFirstBlockAbove(level, player.blockPosition());
            player.teleportTo(earthPos.x, earthPos.y, earthPos.z);
            player.tell(Text.gold("恭喜你逃出了迷宫"));
            player.give(Item.of("tiab:time_in_a_bottle", "{storedTime:622080000,totalAccumulatedTime:622080000}"));
            player.give("mel:dream_wings");
            player.give(Item.of("botania:overgrowth_seed", 64));
        }
    });
});
