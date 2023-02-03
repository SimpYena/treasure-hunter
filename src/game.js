import { Application, Container } from "pixi.js";
import { GameScene } from "./scene/gameScene";

export default class Game {
  constructor() {
    this.app = new Application({
      width: 500,
      height: 500,
      backgroundColor: 0x1099bb,
      resolution: window.devicePixelRatio || 1,
    });

    document.body.appendChild(this.app.view);
    this.gameContainer = new Container;
    this.app.stage.addChild(this.gameContainer);
    this.app.ticker.add(this.update, this);
    this.initGameScene();
  }

  initGameScene() {
    this.gameScene = new GameScene();
    this.gameContainer.addChild(this.gameScene);


  }
  update(deltaTime){
    this.gameScene.update(deltaTime);

  }
}
