import { Player } from "./player";

export interface Lineup {
    id: string;
    disabled: boolean;
    dorsal: number;
    image: string;
    ovr: number;
    player: Player;
    position: string;
    redCard: boolean;
    yellowCards: number;
}

export class LineupModel implements Lineup {
    constructor(
        public id: string,
        public disabled: boolean,
        public dorsal: number,
        public image: string,
        public ovr: number,
        public player: Player,
        public position: string,
        public redCard: boolean,
        public yellowCards: number
    ) {}
}