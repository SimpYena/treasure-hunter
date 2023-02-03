import { Container, Sprite, Texture, Ticker} from "pixi.js";
import { Player } from "../objects/player";
import { Door } from "../objects/door"
import { Treasure } from "../objects/treasure";
import { Monster } from "../objects/monster";
import { MonsterMove } from "../objects/monstermove";

export class GameScene extends Container {
    constructor() {
        super();
        this.deltaTime = 0;
        this.gameContainer = new Container();
        this.addChild(this.gameContainer);
        this.initIngame();
    }
    initIngame(){
        let texture = Texture.from("dungeon.png");
        this.dungeon = new Sprite(texture);
        this.gameContainer.addChild(this.dungeon);

        this.initPlayer();
        this.initDoor();
        this.initTreasure();
        this.initMonster();
    }
    initPlayer(){
        this.player = new Player();
       
        this.player.x = 50;
        this.player.y = 50;
        this.gameContainer.addChild(this.player);
    }
    initDoor(){
        this.door = new Door();
       
        this.door.x = 50;
        
        this.gameContainer.addChild(this.door);
    }
    initTreasure(){
        this.treasure = new Treasure();
        this.treasure.x = 400   
        this.treasure.y = 400

        this.gameContainer.addChild(this.treasure);
        }

    initMonster(){
            this.monsters = new MonsterMove();
            this.gameContainer.addChild(this.monsters);
            
      }
      update(deltaTime) {
        this.monsters.update(deltaTime);
        this.deltaTime += deltaTime;
    
          

}
}
