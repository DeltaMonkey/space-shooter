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
}
