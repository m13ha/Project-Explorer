import {GameStateManager} from "../model/GameStateManager";
import { launchGame } from "../controllers/initializer";
import { GameEventHandler } from "../controllers/gameEventHandler";

// Since this is just testing, I am including everything in one index.ts file
// Subsequently I will separate them into modules and other files but I need to
// Get the functionality on the table first before I modularize
// This is probably a very long commit. Bear with me :-)

// For now since we're just prototyping, I chose 3 pictures to test usage of multiple
// pictures in the program;
const pictureList = ["https://res.cloudinary.com/healerc/image/upload/v1686970516/project-explorer/university-of-benin-aka-maingate-in-benin-city-edo-state-2F7127A_xapvnw.jpg", "https://res.cloudinary.com/healerc/image/upload/v1686970523/project-explorer/uniben_ycgk7c.jpg", "https://res.cloudinary.com/healerc/image/upload/v1687102026/project-explorer/ogbe-stadium_oacp3a.jpg",];
let activePicture = 0;
// Index of the active picture being used

// Button to change the picture (as I said, testing)
const buttonChangePicture = document.getElementById("change-picture");

buttonChangePicture ?. addEventListener("click", () => {
    activePicture++;
    if (activePicture >= pictureList.length) {
        activePicture = 0; // Start counting from 0 if last picture has been rendered
    }changePicture();
});

/**
 * Change the picture used in the puzzle in all the "tile" divs except
 * in the tile that is to be used as empty space and panel
 */
const changePicture = () => {
    const tileList = document.querySelectorAll(".tile:not(.empty, .panel)")as NodeListOf < HTMLDivElement >;

    tileList.forEach((tileDiv) => {
        tileDiv.style.backgroundImage = `url(${
            pictureList[activePicture]
        })`;
    });
};

/**
 * This function handles if the user wants to change the difficulty of the game
 * @param event select event triggered when use attempts to change difficulty
 */
const handleChangeDifficulty = (event : Event) => {
    const target = event.target as HTMLSelectElement;
    const {value} = target;

    changeDifficulty(value);
};

const selectDifficulty = document.getElementById("difficulty"); // select element
selectDifficulty?.addEventListener("change", handleChangeDifficulty);

/**
 * Method changes the difficulty of the game
 * @param difficulty A string which is either 'easy', 'medium', 'hard', coming
 * from the option in the select input
 */
const changeDifficulty = (difficulty : string) => {
    let tileDimension: string;
    // tileDimensions correspond to the ids of template in
    // the html file to be used to generate the tiles for the various difficulties
    switch (difficulty) {
        case "easy": tileDimension = "x3";
            break;
        case "normal": tileDimension = "x4";
            break;
        case "hard": tileDimension = "x5";
            break;
        default:
            throw new Error("Difficulty " + difficulty + " does not exist");
    }

    const template = document.getElementById(tileDimension)as HTMLTemplateElement;
    const tileList = template.content.firstElementChild ?. cloneNode(true)as HTMLDivElement;

    createTilePuzzle(tileList);
};

const handleTileClick = (event : Event) => {
    //GameEventHandler.moveTiles()
    const target = event.target as HTMLDivElement;
    if (! target.classList.contains("empty")) { // If an empty element is not clicked, replace the clicked with the empty
        const emptyDiv = document.querySelector(".empty")as HTMLDivElement;
        const emptyDivClass = emptyDiv.className;

        emptyDiv.className = target.className;
        emptyDiv.addEventListener("click", handleTileClick);
        target.className = emptyDivClass;
        target.removeEventListener("click", handleTileClick);
    }
};

// The action of starting a game

const startButton = document.getElementById("start");
startButton?.addEventListener("click", startGame);

const GameDifficulty = {
    easy: 3,
    medium: 4,
    hard: 5
};

function startGame() {
    //const gameManager = new GameStateManager();

    
    // console.log("board", board);

    const selectDifficulty = document.querySelector("#difficulty")as HTMLSelectElement;

    const board = launchGame(selectDifficulty.value);;

    if (selectDifficulty.value === "easy" && board.getSize() === GameDifficulty.easy) {
        // Both the view and the board model has the same difficulty
        // console.log(board.getInternalBoard());

        // console.log(`x${GameDifficulty.easy}`);
        // Repetition (for now)
        const template = document.getElementById(`x${
            GameDifficulty.easy
        }`)as HTMLTemplateElement;
        const tileList = template.content.firstElementChild ?. cloneNode(true)as HTMLDivElement;

        // I expect the total elements in the game corresponds,
        // though I should test this
        // tileList.childNodes.forEach((node, index) => {
        // const viewCoords = getCoordsFromNumber();
        // })
        const internalBoard = board.getInternalBoard();
        for (let i = 0; i < internalBoard.length; i++) {
            for (let j = 0; j < internalBoard[i].length; j++) {
                const index = internalBoard[i][j];
                const tileCoords = getCoordsFromNumber(index, GameDifficulty.easy);
                const tile = tileList.querySelector(`.${tileCoords}`);
                if (! tile) 
                    throw new Error("Something went wrong");
                
                tileList.appendChild(tile);
            }
        }

        createTilePuzzle(tileList);
    }
}

function getCoordsFromNumber(index: number, size: number): string {
    if (index === 0) {
        return "empty";
    } else if (index > size ** 2) {
        throw new Error(`Index ${index} cannot be greater than size ${size}`);
    } else {
        return computeCoordinates();
    }

    function computeCoordinates() {
        const row = Math.ceil(index / size - 1);
        const col = index - size * row - 1;
        return `tile-${row}${col}`;
    }
}

function createTilePuzzle(tileList: HTMLDivElement) {
    // This is required as the event listener for the change difficulty select
    // defined above does not apply to those in the template so they have to be readded again
    // const select = tileList.querySelector("#difficulty") as HTMLSelectElement;
    // select.addEventListener("change", handleChangeDifficulty);

    tileList.querySelectorAll(".tile:not(.empty, .panel)").forEach((tile) => {
        tile.addEventListener("click", handleTileClick);
    });

    // Replace the currently active puzzle with the one with the new difficulty
    // const activePuzzle = document.querySelector("#container > .puzzle-board");
    const container = document.getElementById("container");
    if (container) {
        container.appendChild(tileList);
        // activePuzzle.parentNode?.replaceChild(tileList, activePuzzle);
    } else {
        const container = document.createElement("div");
        container.id = "container";
        container.appendChild(tileList);

        document.body.appendChild(container);
    }
}
