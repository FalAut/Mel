BlockEvents.rightClicked("composter", (event) => {
    const { block, hand } = event;
    if (hand != "MAIN_HAND") return;

    const compostLevel = block.blockState.getValue(BlockProperties.LEVEL_COMPOSTER);

    if (compostLevel == 8) {
        block.popItemFromFace("7x bone_meal", "up");
    }
});
