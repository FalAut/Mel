ServerEvents.recipes((event) => {
    event.custom({
        type: "lychee:item_inside",
        hide_in_viewer: true,
        comment: "comment.lychee.canseesky",
        contextual: [
            {
                type: "weather",
                weather: "clear",
            },
            {
                type: "time",
                value: {
                    min: 0,
                    max: 12000,
                },
            },
            {
                type: "custom",
                id: "can_see_sky",
            },
        ],
        post: [
            {
                type: "prevent_default",
            },
            {
                type: "custom",
                id: "add_solar",
            },
        ],
        item_in: [
            {
                item: "mel:sun_crystal",
            },
        ],
        block_in: "*",
    });

    event.custom({
        type: "lychee:item_inside",
        ghost: true,
        time: 100,
        comment: "comment.lychee.canseesky",
        contextual: [
            {
                type: "weather",
                weather: "clear",
            },
            {
                type: "time",
                value: {
                    min: 0,
                    max: 12000,
                },
            },
            {
                type: "custom",
                id: "can_see_sky",
            },
        ],
        post: [
            {
                type: "drop_item",
                item: "mel:sun_crystal_full",
            },
        ],
        item_in: [
            {
                item: "mel:sun_crystal",
            },
        ],
        block_in: "*",
    });
});
