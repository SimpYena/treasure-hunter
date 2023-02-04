import { Container, Sprite, Texture } from "pixi.js";

export class HealthBar extends Container {
  constructor(){
    super();
    this.create();
  }

  create(){
    let texture = Texture.from("healthBar.png");
    this.healthBar = new Sprite(texture);
    this.healthBar.width = 200;
    this.addChild(this.healthBar);
  }
}
