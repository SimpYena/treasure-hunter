import { Container, Sprite, Texture } from "pixi.js";

export class Monster extends Container {
  constructor() {
    super();

  }
  create(monsterX, monsterY){
    const texture = Texture.from("blob.png");
    this.monster = new Sprite(texture);
    this.monster.x = monsterX;
    this.monster.y = monsterY;
    this.monster.velocityY = 10;
    this.addChild(this.monster);
 
  }

}