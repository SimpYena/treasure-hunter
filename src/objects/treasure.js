import { Container, Sprite, Texture} from "pixi.js";

export class Treasure extends Container {
    constructor(){
        super();
        this.create();
    }


    create(){
        // this.setup = {
        //     width: 20,
        //     height: 40,


        // };
        const texture = Texture.from("treasure.png")
        this.treasure = new Sprite(texture);
        this.addChild(this.treasure);
    }
}