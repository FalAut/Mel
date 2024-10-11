const manaNbtKeys = ["currentMana", "maxMana", "mana", "manaToGet"];

JadeEvents.onCommonRegistration((event) => {
    event.blockDataProvider("mel:numerical_mana", $BlockEntity).setCallback((tag, accessor) => {
        const { blockEntity } = accessor;

        manaNbtKeys.forEach((key) => {
            if (blockEntity[key] != null) {
                tag.putInt(key, blockEntity[key]);
            }
        });
    });

    event.blockDataProvider("mel:numerical_source", $BlockEntity).setCallback((tag, accessor) => {
        const { blockEntity, block } = accessor;

        if (blockEntity.source != null) {
            tag.putInt("source", blockEntity.source);
        }

        if (block.id == "mel:source_flower" || block.id == "mel:flowing_source_flower") {
            tag.putInt("source", blockEntity.persistentData.getInt("source"));
        }
    });
});
