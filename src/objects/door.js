import { Container, Sprite, Texture} from "pixi.js";

export class Door extends Container {
    constructor(){
        super();
        this.create();
    }


    create(){
        // this.setup = {
        //     width: 20,
        //     height: 40,


        // };
        const texture = Texture.from("door.png")
        this.door = new Sprite(texture);
        this.addChild(this.door);
    }
}