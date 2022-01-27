import GUN_IMAGE from "./images/gun.png";
import ENEMY_IMAGE from "./images/enemy.png";

export const GUN_WIDTH = 64;
export const GUN_HEIGHT = 64;
export const GUN_STARTX = 450;
export const GUN_SPEED = 10;

export const ENEMY_HEIGHT = 48;
export const ENEMY_WIDTH = 64;
export const ENEMY_PADDING = 5;
export const ENEMY_SPEED = 1;

export const BULLET_WIDTH = 8;
export const BULLET_HEIGHT = 8;
export const BULLET_SPEED = 4;

export const STAGE_PADDING = 10;
export const STAGE_ROWS = 20;
export const STAGE_COLS = 10;

export const ENEMY_IMAGES: { [key: number]: string } = {
  1: ENEMY_IMAGE,
};

export const ENEMY_ENERGY: { [key: number]: number } = {
  1: 1, // enemy type 1
};

// prettier-ignore
export const LEVEL = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    0, 1, 0, 1, 0, 1, 0, 1, 0, 0,
    1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
