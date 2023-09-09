export interface TeamStats {
  goals: number;
  shots: number;
  shotsOnTarget: number;
  shotsOffTarget: number;
  assists: number;
  passes: number;
  shortPasses: number;
  longPasses: number;
  highPasses: number;
  slidings: number;
  interferes: number;
  fouls: number;
  deflects: number;
  offsides: number;
  cornerKicks: number;
  freeKicks: number;
  penaltyKicks: number;
  yellowCards: number;
  redCards: number;
  attackZones: {
    left: number;
    middle: number;
    right: number;
  };
}

export class TeamStatsModel implements TeamStats {
    constructor(
        public goals: number,
        public shots: number,
        public shotsOnTarget: number,
        public shotsOffTarget: number,
        public assists: number,
        public passes: number,
        public shortPasses: number,
        public longPasses: number,
        public highPasses: number,
        public slidings: number,
        public interferes: number,
        public fouls: number,
        public deflects: number,
        public offsides: number,
        public cornerKicks: number,
        public freeKicks: number,
        public penaltyKicks: number,
        public yellowCards: number,
        public redCards: number,
        public attackZones: {
            left: number;
            middle: number;
            right: number;
        }
    ) {}
}