import { Lineup } from "./lineup";
import { TeamInfo } from "./team-info";
import { Performances } from "./performances";

export interface Match {
  id: string;
  leftLineup: Lineup[];
  leftBench: any[];
  leftInstructions: any;
  leftTactic: string;
  leftTacticName: string;
  leftTacticPositioning: number;
  leftTeamAddress: string;
  leftTeamInfo: TeamInfo;
  rightLineup: Lineup[];
  rightBench: any[];
  rightInstructions: any;
  rightTactic: string;
  rightTacticName: string;
  rightTacticPositioning: number;
  rightTeamAddress: string;
  rightTeamInfo: TeamInfo;
  comments: Comment[];
  performances: Performances;
  score: number[];
  startedDatetime: string;
}

export class MatchModel implements Match {
  constructor(
    public id: string,
    public leftLineup: Lineup[],
    public leftBench: any[],
    public leftInstructions: any,
    public leftTactic: string,
    public leftTacticName: string,
    public leftTacticPositioning: number,
    public leftTeamAddress: string,
    public leftTeamInfo: TeamInfo,
    public rightLineup: Lineup[],
    public rightBench: any[],
    public rightInstructions: any,
    public rightTactic: string,
    public rightTacticName: string,
    public rightTacticPositioning: number,
    public rightTeamAddress: string,
    public rightTeamInfo: TeamInfo,
    public comments: Comment[],
    public performances: Performances,
    public score: number[],
    public startedDatetime: string
  ) {}
}