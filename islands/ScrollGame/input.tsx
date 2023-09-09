import { Game } from "./game.tsx";

export class InputHandler {
  keys: string[];
  game: Game;
  constructor(game: Game) {
    this.keys = [];
    this.game = game;
    self.window.addEventListener("keydown", (e) => {
      if (
        (
          e.key === "ArrowDown" || e.key === "ArrowUp" ||
          e.key === "ArrowLeft" || e.key === "ArrowRight" ||
          e.key === "Enter" || e.key === " "
        ) &&
        this.keys.indexOf(e.key) === -1
      ) {
        this.keys.push(e.key);
      } else if (e.key === "d") {
        this.game.debug = !this.game.debug;
      }
    });
    self.window.addEventListener("keyup", (e) => {
      if (
        e.key === "ArrowDown" || e.key === "ArrowUp" ||
        e.key === "ArrowLeft" || e.key === "ArrowRight" ||
        e.key === "Enter" || e.key === " "
      ) {
        this.keys.splice(this.keys.indexOf(e.key), 1);
      }
    });
  }
}
