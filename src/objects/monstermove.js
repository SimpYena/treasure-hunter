import { Container } from "pixi.js";
import { Monster } from "./monster";

export class MonsterMove extends Container{

    constructor(){
        super();
        this.monsters = [];
        this.deltaTime = 0;
        this.spam();
    }
    spam(){
        this.monster = new Monster;
        this.addChild(this.monster);
        for(let i = 0; i < 3; i++){
          let monsterX = 150 + i*100;
          let monsterY = 50;
          let monster = this.monster.create(monsterX, monsterY);
          this.monsters.push(monster);
        }
      }
      move(){
        this.monsters.forEach((monster) => {
          monster.y += monster.velocityY;
          
          if(monster.y >= 500 || monster.y <= 30){
            monster.velocityY *= -1;
          }
        })
      }
      update(deltaTime){
        this.move();
      }
    
    
    
    
}