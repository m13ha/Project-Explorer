import View from "./View";
import { GameDifficultyType } from "./View";

const pictureList = [
  "https://res.cloudinary.com/healerc/image/upload/v1686970516/project-explorer/university-of-benin-aka-maingate-in-benin-city-edo-state-2F7127A_xapvnw.jpg",
  "https://res.cloudinary.com/healerc/image/upload/v1686970523/project-explorer/uniben_ycgk7c.jpg",
  "https://res.cloudinary.com/healerc/image/upload/v1687102026/project-explorer/ogbe-stadium_oacp3a.jpg",
];

/**
 * On the html file are template tags which contain elements that will
 * be used to build the game. They have class name (x3, x4 and x5) which correspond
 * to (easy, normal and hard) respectively.
 * @param difficulty The difficulty as chosen by the user
 * @returns string class names that will be used to retrieve the elements
 * corresponding to the difficulty.
 */
function getTemplateId(difficulty: GameDifficultyType) {
  switch (difficulty) {
    case "easy":
      return "x3";

    case "normal":
      return "x4";

    case "hard":
      return "x5";

    default:
      throw new Error("Difficulty " + difficulty + " does not exist");
  }
}

let view: View;

// Get the values provided for in the settings and start the game
document.getElementById("start-game")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElement = event.target as HTMLFormElement;
  const difficulty = (
    formElement.querySelector("#difficulty") as HTMLSelectElement
  ).value;

  let formImageId = (
    formElement.querySelector("#puzzle-image-id") as HTMLSelectElement
  ).value;
  // for now we show three images

  const imageId = parseInt(formImageId) || 0;
  startGame(difficulty as GameDifficultyType, imageId);
});

/**
 * Initialize the View and start playing the game
 * @param difficulty The difficulty chosen by the player
 * @param imageId The image that is played
 */
function startGame(difficulty: GameDifficultyType, imageId: number) {
  let containerDiv = document.getElementById("container");
  if (!containerDiv) {
    containerDiv = document.createElement("div");
    containerDiv.id = "container";
    document.body.appendChild(containerDiv);
  }

  const tileId = getTemplateId(difficulty);
  const template = document.getElementById(tileId) as HTMLTemplateElement;
  if (!template) throw new Error("No template for tiles of " + difficulty);

  const tileList = template.content.firstElementChild?.cloneNode(
    true
  ) as HTMLDivElement;

  view = new View(difficulty, pictureList[imageId], containerDiv, tileList);

  view.start();
}
