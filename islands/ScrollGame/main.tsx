import { useEffect } from "preact/hooks";
import { assertIsDefined } from "../Util.tsx";
import { Game } from "./game.tsx";

function script() {
  const canvas = document.getElementById("canvas1") as HTMLCanvasElement;
  assertIsDefined(canvas);
  const ctx = canvas.getContext("2d");

  canvas.width = 1200;
  canvas.height = 700;
  // canvas.width = window.innerWidth;
  // canvas.height = window.innerHeight;

  const game = new Game(canvas.width, canvas.height);
  console.log(game);

  // function restartGame() {
  //   game.player.restart();
  //   game.background.restart();
  //   game.score = 0;
  //   game.gameOver = false;
  //   animate();
  // }

  let lastTime = Date.now();
  function animate() {
    assertIsDefined(ctx);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const nowTime = Date.now();
    const deltaTime = nowTime - lastTime;
    lastTime = Date.now();
    game.update(deltaTime);
    game.draw(ctx);
    if (!game.gameOver) requestAnimationFrame(animate);
  }

  animate();
}

export function ScrollGame() {
  useEffect(() => {
    script();
  }, []);

  return (
    <div class="py-10 px-0 mx-auto max-w-full">
      <div class="flex justify-center">
        <canvas
          id="canvas1"
          class="bg-blue-300 border-4 border-gray-800 max-w-full max-h-full"
        />
        <img id="player" class="hidden" src="player.png" />
        <img id="layer1" class="hidden" src="layer-1.png" />
        <img id="layer2" class="hidden" src="layer-2.png" />
        <img id="layer3" class="hidden" src="layer-3.png" />
        <img id="layer4" class="hidden" src="layer-4.png" />
        <img id="layer5" class="hidden" src="layer-5.png" />
        <img id="enemy_fly" class="hidden" src="enemy_fly.png" />
        <img id="enemy_plant" class="hidden" src="enemy_plant.png" />
        <img id="enemy_spider_big" class="hidden" src="enemy_spider_big.png" />
        <img id="fire" class="hidden" src="fire.png" />
        <img id="collisionAnimation" class="hidden" src="boom.png" />
        <img id="lives" class="hidden" src="lives.png" />
      </div>
    </div>
  );
}
