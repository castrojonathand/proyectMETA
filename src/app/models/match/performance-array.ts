export interface PerformanceArray {
    fieldPlayers: number[];
    benchPlayers: number[];
}

export class PerformanceArrayModel implements PerformanceArray {
    constructor(
        public fieldPlayers: number[],
        public benchPlayers: number[]
    ) {}
}