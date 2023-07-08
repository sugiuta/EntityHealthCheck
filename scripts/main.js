import { system, world } from "@minecraft/server"

world.afterEvents.entityHurt.subscribe((entityHurtEvent) => {
    let entityName = entityHurtEvent.hurtEntity.typeId.replace(`minecraft:`, ``);
    if (entityName == `player`) return;
    let health = entityHurtEvent.hurtEntity.getComponent(`health`);
    entityHurtEvent.hurtEntity.nameTag = `${entityName}\n§c§lHP:${Math.ceil(health.current)}§r`;
})

system.runInterval(() => {
    if ((system.currentTick % 10) != 0) return;
    let players = world.getAllPlayers();
    for (let player of players) {
        let health = player.getComponent(`minecraft:health`);
        player.nameTag = `${player.name}\nHP:§c§l${Math.ceil(health.current)}§r`;
    }
});