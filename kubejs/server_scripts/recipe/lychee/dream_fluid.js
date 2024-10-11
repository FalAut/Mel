ServerEvents.recipes((event) => {
    let fluids = ["water", "lava"];

    fluids.forEach((fluid) => {
        event.custom({
            type: "lychee:item_inside",
            ghost: true,
            post: [
                {
                    type: "place",
                    block: "mel:dream_fluid",
                },
                {
                    type: "drop_item",
                    item: "mel:dream_fluid_bucket",
                },
            ],
            item_in: [
                {
                    item: "mel:dream_star",
                },
            ],
            block_in: {
                blocks: [fluid],
                state: {
                    level: 0,
                },
            },
        });

        event.custom({
            type: "lychee:item_inside",
            hide_in_viewer: true,
            post: [
                {
                    type: "place",
                    block: "mel:dream_fluid",
                },
            ],
            item_in: [
                {
                    item: "mel:dream_star",
                },
            ],
            block_in: {
                blocks: [fluid],
                state: {
                    level: 0,
                },
            },
        });
    });
});
