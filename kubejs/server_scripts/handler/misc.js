BlockEvents.broken((event) => {
    const { block } = event;
    if (block.id != "mel:datura") return;

    block.popItemFromFace("occultism:datura", "up");
    block.popItemFromFace("occultism:datura_seeds", "up");
});
