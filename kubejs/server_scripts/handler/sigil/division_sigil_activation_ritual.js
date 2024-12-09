let ritualConditions = [];

const checkCondition = (condition, messageKey, player) => {
    const status = condition ? "§a✅" : "§4❌";
    if (player) {
        player.tell(Text.translate(`message.mel.activation_ritual.${messageKey}`, status).gold());
    }
    return condition;
};

const checkAllConditions = (level, block, player) => {
    const multiblock = $PatchouliAPI.getMultiblock("mel:division_sigil_activation_ritual");
    const brightness = level.getBrightness("block", block.pos);
    const time = level.getDayTime();

    ritualConditions = [
        checkCondition(multiblock.validate(level, block.pos, "none"), "multiblock", player),
        checkCondition(time <= 18500 && time > 17500, "midnight", player),
        checkCondition(brightness <= 7, "brightness", player),
        checkCondition(block.canSeeSky, "canseesky", player),
    ];

    return ritualConditions.every(Boolean);
};

BlockEvents.rightClicked("enchanting_table", (event) => {
    const { hand, item, level, block, player } = event;

    if (hand != "MAIN_HAND" || item != "mel:division_sigil") return;
    player.tell(Text.translate("message.mel.activation_ritual.title").red());

    if (checkAllConditions(level, block, player)) {
        player.tell(Text.translate("message.mel.activation_ritual.prepared"));
        player.tell(Text.translate("message.mel.activation_ritual.sacrifice").darkRed());
    }

    player.swing();
});

EntityEvents.death((event) => {
    const { entity, level, source } = event;
    if (!source.actual || !source.actual.isPlayer()) return;
    const block = entity.block;
    const multiblock = $PatchouliAPI.getMultiblock("mel:division_sigil_activation_ritual");
    const player = source.player;

    if (checkAllConditions(level, block)) {
        multiblock.simulate(level, block.pos, "none", false).second.forEach((result) => {
            if (result.character == "A") {
                level.setBlock(
                    result.worldPosition.below(),
                    Block.getBlock("botania:mutated_grass").defaultBlockState(),
                    2
                );
            }
            if (result.character == "B") {
                level.setBlock(
                    result.worldPosition.above(),
                    Blocks.REDSTONE_WIRE.defaultBlockState().setValue(BlockProperties.POWER, new $Integer("15")),
                    2
                );
            }
        });

        let lightningBoltEntity = block.createEntity("lightning_bolt");
        lightningBoltEntity.moveTo(Vec3d.atCenterOf(block.pos));
        lightningBoltEntity.spawn();

        let inventory = player.inventory;
        let slot = inventory.find("mel:division_sigil");
        let sigil = inventory.getStackInSlot(slot);
        sigil.count--;
        let activateSigil = Item.of("mel:division_sigil").enchant("mel:activate", 1);
        player.give(activateSigil);
        level.broadcastEntityEvent(entity, 35);
        player.sendData("display_item_activation", { displayItem: activateSigil.id });
    }
});
