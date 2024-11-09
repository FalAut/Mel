BlockEvents.rightClicked("composter", (event) => {
    const { block, item, hand, player } = event;
    if (hand != "MAIN_HAND") return;

    let compostLevel = block.blockState.getValue(BlockProperties.LEVEL_COMPOSTER);
    if (compostLevel == 8) {
        block.popItemFromFace("7x bone_meal", "up");
    } else if (compostLevel != 0 && item.empty) {
        block.popItemFromFace(Item.of("bone_meal", compostLevel), "up");
        block.set("composter");
        player.swing();
    }
});
