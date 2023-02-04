import { Container, Sprite, Texture} from "pixi.js";

export class Lose extends Container {
    constructor(){
        super();
        this.create();
    }


    create(){
        const texture = Texture.from("youdie.png")
        this.lose = new Sprite(texture);
        this.addChild(this.lose);
    }
}