//types
import { CanvasView } from "./views/CanvasView";
import { Gun } from "./sprites/Gun";
import { Direction } from "./types";

//images
import GUN_IMAGE from "./images/gun.png";

//level and colors
import {
  GUN_SPEED,
  GUN_WIDTH,
  GUN_HEIGHT,
  GUN_STARTX,
  ENEMY_SPEED,
  BULLET_SPEED,
} from "./setup";

//helpers
import { createEnemies, changeEnemiesDirection } from "./helpers/helper";
import { Enemy } from "./sprites/Enemy";
import { Collision } from "./Collision";
import { Bullet } from "./sprites/Bullet";

let gameOver = false;
let score = 0;

function setGameOver(view: CanvasView): void {
  view.drawInfo("Game Over!");
  gameOver = false;
}

function setGameWin(view: CanvasView): void {
  view.drawInfo("Game Won!");
  gameOver = false;
}

function gameLoop(
  view: CanvasView,
  gun: Gun,
  enemies: Enemy[],
  bullets: Bullet[],
  collision: Collision
) {
  view.clear();
  view.drawSprite(gun);
  view.drawEnemies(enemies);

  // move gun and check so it won't exit the playfield
  if (
    (gun.isMovingLeft && gun.pos.x > 0) ||
    (gun.isMovingRight && gun.pos.x < view.canvas.width - gun.width)
  ) {
    gun.moveGun();
  }

  var bullet: Bullet = gun.shootAction(BULLET_SPEED);
  if (bullet) bullets.push(bullet);

  bullets.forEach((bullet: Bullet) => {
    bullet.moveBullet();
  });

  view.drawBullets(bullets);

  var changeDirection: boolean = false;
  enemies.forEach((enemy: Enemy) => {
    enemy.moveEnemy();
    if (collision.isChangeEnemyCollisionCheck(enemy, view))
      changeDirection = true;
  });

  if (changeDirection) enemies = changeEnemiesDirection(enemies);

  requestAnimationFrame(() => gameLoop(view, gun, enemies, bullets, collision));
}

function startGame(view: CanvasView) {
  //reset display
  score = 0;
  view.drawInfo("");
  view.drawScore(score);

  var enemyStartDirection: Direction;
  var randomDirection = Math.floor(Math.random() * 2);
  if (randomDirection === 1) enemyStartDirection = Direction.Left;
  /*if (randomDirection === 0)*/ else enemyStartDirection = Direction.Right;

  //create enemies
  const enemies = createEnemies(enemyStartDirection, ENEMY_SPEED);
  const bullets: Bullet[] = [];

  // collide with objects
  const collision = new Collision();

  //create the gun
  const gun = new Gun(
    GUN_SPEED,
    GUN_WIDTH,
    GUN_HEIGHT,
    {
      x: GUN_STARTX,
      y: view.canvas.height - GUN_HEIGHT - 5,
    },
    GUN_IMAGE
  );

  gameLoop(view, gun, enemies, bullets, collision);
}

//Create a new view
const view = new CanvasView("#playField");
view.initStartButton(startGame);
