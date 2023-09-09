import { PerformanceArray } from "./performance-array";

export interface Performances {
    left: PerformanceArray;
    right: PerformanceArray;
}

export class PerformancesModel implements Performances {
    constructor(
        public left: PerformanceArray,
        public right: PerformanceArray
    ) {}
}