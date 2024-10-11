ForgeEvents.onEvent("net.minecraftforge.client.event.ViewportEvent$RenderFog", (event) => {
    global.fog(event);
});

global.fog = (event) => {
    // const { camera } = event;
    // const entity = camera.entity;
    // const level = entity.level;
    // if (level.dimension != "mel:misty_forest" || !entity.isPlayer()) return;
    // $RenderSystem.setShaderFogShape("sphere");
    // if (Client.player.persistentData.getBoolean("has_dream_lantern")) {
    //     $RenderSystem.setShaderFogStart(-15);
    //     $RenderSystem.setShaderFogEnd(30);
    // } else {
    //     $RenderSystem.setShaderFogStart(-5);
    //     $RenderSystem.setShaderFogEnd(5);
    // }
};
