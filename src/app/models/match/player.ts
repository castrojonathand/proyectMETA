export interface Player {
    age: number;
    height: number;
    id: number;
    lastName: string;
    condition: number;
    level: number;
    name: string;
    overall: number;
    owner: string;
    potential: number;
    preferredFoot: number;
    role: string;
    seeds: string[];
    sections: any;
    specialAbilities: any[];
    specificRole: string;
    weight: number;
    imageName: string;
}

export class PlayerModel implements Player {
    constructor(
        public age: number,
        public height: number,
        public id: number,
        public lastName: string,
        public condition: number,
        public level: number,
        public name: string,
        public overall: number,
        public owner: string,
        public potential: number,
        public preferredFoot: number,
        public role: string,
        public seeds: string[],
        public sections: any,
        public specialAbilities: any[],
        public specificRole: string,
        public weight: number,
        public imageName: string
    ) {}
}