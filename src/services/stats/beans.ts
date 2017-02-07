export interface Criteria {
    period: Period
    trendOffset: number
    sectionId: number
    filterList: Array<string>
    sortList: Array<string>
    offset: number
    limit: number
}


export interface Period {
    minTimestamp: number
    maxTimestamp: number
    untilNow: boolean
}


export interface PerformanceReport {
    pageViewCount: CountWithTrend
}


export interface CountWithTrend {
    count: number
    trend: number
    trendOffset: number
}
