import { Container, Sprite, Texture} from "pixi.js";
import { Player } from "../objects/player";
import { Door } from "../objects/door"
import { Treasure } from "../objects/treasure";
import { GameOver } from "./gameOver";
import { MonsterMove } from "../objects/monstermove";
import { Monster } from "../objects/monster";
import { Collision } from "../collision/collisiondectect";
import { Win } from "../objects/win";
import { HealthBar } from "../objects/health";
import { Lose } from "../objects/lose";

export class GameScene extends Container {
    constructor() {
        super();
        this.deltaTime = 0;
        this.gameContainer = new Container();
        this.addChild(this.gameContainer);
        this.initIngame();
        this.initGameWin();
        this.initGameLose();
        
     
    }
    initIngame(){
        let texture = Texture.from("dungeon.png");
        this.dungeon = new Sprite(texture);
        this.gameContainer.addChild(this.dungeon);

        this.initPlayer();
        this.initDoor();
        this.initTreasure();
        this.initMonster();
        this.initHealthBar();
        
        
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
    initGameOver(){
        this.gameOver = new GameOver();
        this.gameOver.visible = false;
        this.addChild(this.gameOver);


    }
    initHealthBar(){
        this.health = new HealthBar();
        this.health.x = 300;
        this.health.y = 0;
        this.gameContainer.addChild(this.health);

    }
    initGameWin(){
        this.win = new Win();
        this.win.x = 500
        this.win.y = 600
        this.gameContainer.addChild(this.win);
        
    }
    initGameLose(){
        this.lose = new Lose();
        this.lose.x = 500
        this.lose.y = 600
        this.gameContainer.addChild(this.lose);
        
    }
    
    
    
    update(deltaTime) {
        this.collision = new Collision();
        this.monster = new Monster();
        if(this.collision.collisondetect(this.player,this.monsters)){
            this.health.width -=10;
                if(this.health.width<=0) {
                    this.lose.x = 90;
                    this.lose.y = 30;
                    this.gameContainer.removeChild(this.monsters);
                }
            
                
                
            
         }
         if(this.collision.collisondetect(this.player,this.treasure)){
            this.player.velocityX = 2;
            this.player.velocityY = 2;
            this.treasure.x = this.player.x;
            this.treasure.y = this.player.y;
            
            
           
         }
         if(this.collision.collisondetect(this.treasure,this.door)){
                this.win.x = 15;
                this.win.y = 30;
         }
         
        
        
        
        this.monsters.update(deltaTime);
        this.deltaTime += deltaTime;
        
        
       
        
        
        

}

}
