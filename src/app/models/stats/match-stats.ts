import { TeamStats } from "./team-stats";
import { PlayerStats } from "./player-stats";

export interface MatchStats {
    matchId: string;
    leftTeam: TeamStats;
    rightTeam: TeamStats;
    leftFieldPlayers: PlayerStats[];
    leftBenchPlayers: PlayerStats[];
    rightFieldPlayers: PlayerStats[];
    rightBenchPlayers: PlayerStats[];
}

export class MatchStatsModel implements MatchStats {
    constructor(
        public matchId: string,
        public leftTeam: TeamStats,
        public rightTeam: TeamStats,
        public leftFieldPlayers: PlayerStats[],
        public leftBenchPlayers: PlayerStats[],
        public rightFieldPlayers: PlayerStats[],
        public rightBenchPlayers: PlayerStats[]
    ) {}
}