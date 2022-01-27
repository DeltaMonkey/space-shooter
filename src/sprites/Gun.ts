import { Vector } from "../types";
import { Bullet } from "./Bullet";
import { BULLET_HEIGHT, BULLET_WIDTH, GUN_WIDTH } from "../setup";
import BULLET_IMAGE from "../images/bullet.png";

export class Gun {
  private gunImage: HTMLImageElement = new Image();
  private moveLeft: boolean;
  private moveRight: boolean;
  private _shoot: boolean;

  constructor(
    private speed: number,
    private gunWidth: number,
    private gunHeight: number,
    private position: Vector,
    image: string
  ) {
    this.speed = speed;
    this.gunWidth = gunWidth;
    this.gunHeight = gunHeight;
    this.position = position;
    this.gunImage.src = image;

    this.moveLeft = false;
    this.moveRight = false;

    // Event listeners
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
  }

  //Getters
  get width(): number {
    return this.gunWidth;
  }

  get height(): number {
    return this.gunHeight;
  }

  get pos(): Vector {
    return this.position;
  }

  get image(): HTMLImageElement {
    return this.gunImage;
  }

  get isMovingLeft(): boolean {
    return this.moveLeft;
  }

  get isMovingRight(): boolean {
    return this.moveRight;
  }

  get shoot(): boolean {
    return this._shoot;
  }

  // set
  set shoot(shoot: boolean) {
    this._shoot = shoot;
  }

  // Actions
  public moveGun(): void {
    if (this.moveLeft) this.pos.x -= this.speed;
    if (this.moveRight) this.pos.x += this.speed;
  }

  public shootAction(speed: number): Bullet {
    if (this.shoot) {
      this.shoot = false;
      return new Bullet(
        BULLET_HEIGHT,
        BULLET_WIDTH,
        {
          x: this.pos.x + GUN_WIDTH / 2,
          y: this.pos.y,
        },
        speed,
        BULLET_IMAGE
      );
    }
    return null;
  }

  // events
  handleKeyUp = (e: KeyboardEvent): void => {
    if (e.code === "ArrowLeft" || e.key === "ArrowLeft") this.moveLeft = false;
    if (e.code === "ArrowRight" || e.key === "ArrowRight")
      this.moveRight = false;
    if (e.code === "Space" || e.key === "Space") this.shoot = false;
  };

  handleKeyDown = (e: KeyboardEvent): void => {
    if (e.code === "ArrowLeft" || e.key === "ArrowLeft") this.moveLeft = true;
    if (e.code === "ArrowRight" || e.key === "ArrowRight")
      this.moveRight = true;
    if (e.code === "KeyX" || e.key === "X")
    {
      this.shoot = true;
    } 
  };
}
