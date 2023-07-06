import { Gameboard } from "../model/Gameboard";
import { launchGame } from "../controllers/initializer";
import { getCoordsFromNumber } from "./utils";

export const GameDifficulty = {
  easy: 3,
  normal: 4,
  hard: 5,
};

export type GameDifficultyType = keyof typeof GameDifficulty;

export default class View {
  private board: Gameboard;

  constructor(
    private difficulty: GameDifficultyType,
    private imgUrl: string,
    private containerDiv: HTMLElement,
    private tileDivList: HTMLDivElement
  ) {
    this.board = launchGame(difficulty);
  }

  start() {
    const internalBoard = this.board.getInternalBoard();
    for (let i = 0; i < internalBoard.length; i++) {
      for (let j = 0; j < internalBoard[i].length; j++) {
        const number = internalBoard[i][j];
        const tileCoords = getCoordsFromNumber(
          number,
          GameDifficulty[this.difficulty]
        );
        const tile = this.tileDivList.querySelector(`.${tileCoords}`);
        if (!tile) throw new Error("Something went wrong");

        this.tileDivList.appendChild(tile);
      }
    }

    this.createTilePuzzle();
  }

  private createTilePuzzle() {
    this.tileDivList
      .querySelectorAll(".tile:not(.empty, .panel)")
      .forEach((tile) => {
        const tileDiv = tile as HTMLDivElement;
        tileDiv.style.backgroundImage = `url(${this.imgUrl})`;
        tileDiv.addEventListener("click", this.handleTileClick);
      });
    this.containerDiv.innerHTML = "";
    this.containerDiv.appendChild(this.tileDivList);
  }

  private handleTileClick(event: Event) {
    const target = event.target as HTMLDivElement;
    if (!target.classList.contains("empty")) {
      const emptyDiv = document.querySelector(".empty") as HTMLDivElement;
      const emptyDivClass = emptyDiv.className;

      emptyDiv.className = target.className;
      emptyDiv.addEventListener("click", this.handleTileClick);
      target.className = emptyDivClass;
      target.removeEventListener("click", this.handleTileClick);
    }
  }

  private userWinsGame() {
    // Code to render a game over state
  }

  private userEndsGame() {}
}
