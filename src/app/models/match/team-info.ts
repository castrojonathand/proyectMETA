export interface TeamInfo {
    id: string;
    name: string;
    manager: string;
    clubAcronym: string;
    clubLogo: {
        name: string;
        color: string;
    };
    lineupOverall: number;
    isLineupCompleted: boolean;
}

export class TeamInfoModel implements TeamInfo {
    constructor(
        public id: string,
        public name: string,
        public manager: string,
        public clubAcronym: string,
        public clubLogo: {
        name: string;
        color: string;
        },
        public lineupOverall: number,
        public isLineupCompleted: boolean
    ) {}
}