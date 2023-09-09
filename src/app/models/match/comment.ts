

export interface Comment {
    time: number;
    side?: string;
    playerId?: string;
    commentType: string;
}

export class CommentModel implements Comment {
    constructor(
        public time: number,
        public commentType: string,
        public side?: string,
        public playerId?: string,
    ) {}
}