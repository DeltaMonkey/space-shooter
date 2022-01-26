// Types
import { Vector } from "../types";

export class Bullet {
  private bulletImage: HTMLImageElement = new Image();

  constructor(
    private bulletHeight: number,
    private bulletWidth: number,
    private bulletPosition: Vector,
    private bulletSpeed: number,
    image: string
  ) {
    this.bulletHeight = bulletHeight;
    this.bulletWidth = bulletWidth;
    this.bulletPosition = bulletPosition;
    this.bulletSpeed = bulletSpeed;
    this.bulletImage.src = image;
  }

  //getters
  get height(): number {
    return this.bulletHeight;
  }

  get width(): number {
    return this.bulletWidth;
  }

  get pos(): Vector {
    return this.bulletPosition;
  }

  get speed(): number {
    return this.bulletSpeed;
  }

  get image(): HTMLImageElement {
    return this.bulletImage;
  }

  // Actions
  public moveBullet(): void {
    this.pos.y -= this.speed;
  }
}
