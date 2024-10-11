ServerEvents.recipes((event) => {
    let blocks = ["minecraft:white_concrete", "minecraft:gray_concrete"];

    blocks.forEach((block) => {
        event.custom({
            type: "lychee:block_interacting",
            post: [
                {
                    type: "prevent_default",
                },
                {
                    type: "drop_item",
                    item: block,
                },
            ],
            item_in: {
                item: "mel:dream_star",
            },
            block_in: block,
        });
    });
});
