import { Gun } from "../sprites/Gun";
import { Enemy } from "../sprites/Enemy";
import { Bullet } from "../sprites/Bullet";

export class CanvasView {
  public canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private scoreDisplay: HTMLObjectElement | null;
  private start: HTMLObjectElement | null;
  private info: HTMLObjectElement | null;

  constructor(canvasName: string) {
    this.canvas = document.querySelector(canvasName) as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d");
    this.scoreDisplay = document.querySelector("#score");
    this.start = document.querySelector("#start");
    this.info = document.querySelector("#info");
  }

  public clear(): void {
    this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  public initStartButton(startFunction: (view: CanvasView) => void): void {
    this.start?.addEventListener("click", () => startFunction(this));
  }

  public drawScore(score: number): void {
    if (this.scoreDisplay) this.scoreDisplay.innerHTML = score.toString();
  }

  public drawInfo(text: string): void {
    if (this.info) this.info.innerHTML = text;
  }

  public drawSprite(sprite: Gun | Enemy | Bullet): void {
    if (!sprite) return;

    this.context?.drawImage(
      sprite.image,
      sprite.pos.x,
      sprite.pos.y,
      sprite.width,
      sprite.height
    );
  }

  public drawEnemies(enemies: Enemy[]) {
    enemies.forEach((enemy) => {
      this.drawSprite(enemy);
    });
  }

  public drawBullets(bullets: Bullet[]) {
    bullets.forEach((bullet) => {
      this.drawSprite(bullet);
    });
  }
}
