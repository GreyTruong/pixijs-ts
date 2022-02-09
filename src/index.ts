import { Loader, Application, Sprite, Texture, AnimatedSprite } from "pixi.js";

const app = new Application({
  width: innerWidth,
  height: innerHeight,
});

document.body.appendChild(app.view);

const loader = Loader.shared;
loader.add("./assets/spritesheet.json").load(() => {
  const textures = [];
  for (let i = 1; i <= 4; i++) {
    const texture = Texture.from(`RunRight0${i}.png`);
    textures.push(texture);
  }
  const animatedSprite = new AnimatedSprite(textures);
  animatedSprite.x = 200;
  animatedSprite.y = 100;
  animatedSprite.play();
  app.stage.addChild(animatedSprite);
  animatedSprite.animationSpeed = 0.3;
  app.ticker.add(() => {
    animatedSprite.x += 10;
    animatedSprite.y += 1;
    backtopPostion();
  });
  function backtopPostion() {
    if (animatedSprite.x > window.innerWidth) {
      animatedSprite.x = 0;
    }
    if (animatedSprite.y > window.innerHeight) {
      animatedSprite.y = 0;
    }
  }
});
