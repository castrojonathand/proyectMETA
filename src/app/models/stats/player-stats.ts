export interface PlayerStats {
    playerId: string;
    numberOfGoals: number;
    goals: any[];
    numberOfShots: number;
    shots: number[][];
    numberOfPasses: number;
    numberOfShortPasses: number;
    shortPasses: number[][];
    numberOfLongPasses: number;
    longPasses: any[];
    numberOfHighPasses: number;
    highPasses: number[][];
    assists: number;
    numberOfSlidings: number;
    slidings: any[];
    numberOfFouls: number;
    fouls: any[];
    numberOfInterferes: number;
    interferes: number[][];
    deflects: number;
    goalieReceivedGoals: number;
    yellowCards: number;
    redCards: number;
    performance: number;
}

export class PlayerStatsModel implements PlayerStats {
    constructor(
        public playerId: string,
        public numberOfGoals: number,
        public goals: any[],
        public numberOfShots: number,
        public shots: number[][],
        public numberOfPasses: number,
        public numberOfShortPasses: number,
        public shortPasses: number[][],
        public numberOfLongPasses: number,
        public longPasses: any[],
        public numberOfHighPasses: number,
        public highPasses: number[][],
        public assists: number,
        public numberOfSlidings: number,
        public slidings: any[],
        public numberOfFouls: number,
        public fouls: any[],
        public numberOfInterferes: number,
        public interferes: number[][],
        public deflects: number,
        public goalieReceivedGoals: number,
        public yellowCards: number,
        public redCards: number,
        public performance: number
    ) {}
}