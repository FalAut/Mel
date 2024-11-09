ForgeEvents.onEvent("net.minecraftforge.client.event.ViewportEvent$RenderFog", (event) => {
    global.fog(event);
});

global.fog = (/**@type {Internal.ViewportEvent$RenderFog} */ event) => {
    if (event.camera.entity.level.dimension != "mel:misty_forest") return;
    $RenderSystem.setShaderFogShape("sphere");

    if (event.camera.entity.persistentData.getBoolean("has_dream_lantern")) {
        $RenderSystem.setShaderFogStart(-15);
        $RenderSystem.setShaderFogEnd(30);
    } else {
        $RenderSystem.setShaderFogStart(-5);
        $RenderSystem.setShaderFogEnd(5);
    }
};
