// Types
import { Direction, Vector } from "../types";

export class Enemy {
  private enemyImage: HTMLImageElement = new Image();
  private moveLeft: boolean;
  private moveRight: boolean;

  constructor(
    private enemyHeight: number,
    private enemyWidth: number,
    private enemyPosition: Vector,
    private enemyEnergy: number,
    private enemySpeed: number,
    private enemyDirection: Direction,
    image: string
  ) {
    this.enemyHeight = enemyHeight;
    this.enemyWidth = enemyWidth;
    this.enemyPosition = enemyPosition;
    this.enemyEnergy = enemyEnergy;
    this.enemySpeed = enemySpeed;
    this.enemyDirection = enemyDirection;
    this.enemyImage.src = image;
  }

  // Getters
  get height(): number {
    return this.enemyHeight;
  }

  get width(): number {
    return this.enemyWidth;
  }

  get pos(): Vector {
    return this.enemyPosition;
  }

  get energy(): number {
    return this.enemyEnergy;
  }

  get speed(): number {
    return this.enemySpeed;
  }

  get direction(): Direction {
    return this.enemyDirection;
  }

  get image(): HTMLImageElement {
    return this.enemyImage;
  }

  get isMovingLeft(): boolean {
    return this.moveLeft;
  }

  get isMovingRight(): boolean {
    return this.moveRight;
  }

  // Setters
  set energy(enemyEnergy: number) {
    this.enemyEnergy = enemyEnergy;
  }

  set direction(enemyDirection: Direction) {
    this.enemyDirection = enemyDirection;
  }

  // Actions
  public moveEnemy(): void {
    if (this.enemyDirection == Direction.Left) this.pos.x -= this.speed;
    if (this.enemyDirection == Direction.Right) this.pos.x += this.speed;
  }
}
