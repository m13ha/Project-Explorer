// Static class for storing game configurations

export class Settings
{
    private static GameDifficulty = {
        easy: 3,
        normal: 4,
        hard: 5
    }

    // Default difficulty
    private static gameDifficulty;;
    

    // Not meant to be instatiable
    private constructor() {}

    public static setGameDifficulty (difficulty) {
        this.gameDifficulty = Settings.GameDifficulty[difficulty]
    }


    public static getGameDifficulty(): number {
        return Settings.gameDifficulty;
    }
}