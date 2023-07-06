import { world } from "@minecraft/server"

world.afterEvents.entityHurt.subscribe((entityHurtEvent) => {
    let entityName = entityHurtEvent.hurtEntity.typeId.replace(`minecraft:`, ``);
    let health = entityHurtEvent.hurtEntity.getComponent(`health`);
    entityHurtEvent.hurtEntity.nameTag = `${entityName}\n§c§lHP:${Math.ceil(health.current)}§r`;
})