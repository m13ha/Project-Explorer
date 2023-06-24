// Static class for storing game configurations

export class Settings
{
    private static GameDifficulty = {
        easy: 3,
        normal: 4,
        hard: 5
    }

    // Default difficulty
    private static gameDifficulty = Settings.GameDifficulty['normal'];
    

    // Not meant to be instatiable
    private constructor() {}


    public static getGameDifficulty(): number {
        return Settings.gameDifficulty;
    }
}