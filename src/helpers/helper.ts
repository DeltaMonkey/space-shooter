import { Enemy } from "../sprites/Enemy";
import { Direction } from "../types";

import {
  ENEMY_IMAGES,
  LEVEL,
  STAGE_COLS,
  STAGE_PADDING,
  ENEMY_WIDTH,
  ENEMY_HEIGHT,
  ENEMY_PADDING,
  ENEMY_ENERGY,
} from "../setup";

export function createEnemies(direction: Direction, speed: number): Enemy[] {
  return LEVEL.reduce((ack, element, i) => {
    const row = Math.floor((i + 1) / STAGE_COLS);
    const col = i % STAGE_COLS;

    const x = STAGE_PADDING + col * (ENEMY_WIDTH + ENEMY_PADDING);
    const y = STAGE_PADDING + row * (ENEMY_HEIGHT + ENEMY_PADDING);

    if (element === 0) return ack;

    return [
      ...ack,
      new Enemy(
        ENEMY_HEIGHT,
        ENEMY_WIDTH,
        { x, y },
        ENEMY_ENERGY[element],
        speed,
        direction,
        ENEMY_IMAGES[element]
      ),
    ];
  }, [] as Enemy[]);
}

export function changeEnemiesDirection(enemies: Enemy[]): Enemy[] {
  enemies.forEach((enemy: Enemy) => {
    if (enemy.direction === Direction.Right) enemy.direction = Direction.Left;
    else enemy.direction = Direction.Right;
  });

  return enemies;
}
