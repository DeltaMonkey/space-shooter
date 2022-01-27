import { Bullet } from "./sprites/Bullet";
import { Enemy } from "./sprites/Enemy";
import { CanvasView } from "./views/CanvasView";

export class Collision {
  isChangeEnemyCollisionCheck(enemy: Enemy, view: CanvasView): boolean {
    // Check enemy collision with walls
    // Enemy movement X constraints
    if (enemy.pos.x > view.canvas.width - enemy.width || enemy.pos.x < 0) {
      return true;
    }
    return false;
  }

  bulletWallCollisionCheck(bullet: Bullet, view: CanvasView): boolean {
    // Check bullet collision with walls
    // bullet movement X constraints
    if (bullet.pos.y < 0) {
      return true;
    }
    return false;
  }

  isCollidingBrick(bullet: Bullet, enemy: Enemy): boolean {
    if (
      bullet.pos.x < enemy.pos.x + enemy.width &&
      bullet.pos.x + bullet.width > enemy.pos.x &&
      bullet.pos.y < enemy.pos.y + enemy.height &&
      bullet.pos.y + bullet.height > enemy.pos.y
    ) {
      return true;
    }
    return false;
  }

  bulletEnemyCollisionCheck(bullet: Bullet, enemies: Enemy[]): boolean {
    let colliding = false;

    var deleteIndexList: number[] = [];

    enemies.forEach((enemy, i) => {
      if (this.isCollidingBrick(bullet, enemy)) {
        if (enemy.energy === 1) {
          if(!deleteIndexList.includes(i))
          {
            deleteIndexList.push(i);
          }
        } else {
          enemy.energy -= 1;
        }
        colliding = true;
      }
    });

    for (let i: number = 0; i < deleteIndexList.length; i++) {
      enemies.splice(deleteIndexList[i], 1);
    }
    return colliding;
  }
}
