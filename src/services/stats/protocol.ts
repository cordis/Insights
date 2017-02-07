import {IProtocol} from "./interfaces";
import * as beans from "./beans";


export default class Protocol implements IProtocol {
    public makePerformanceReport(response: any): beans.PerformanceReport {
        return {
            pageViewCount: Protocol.makeCountWithTrend(response.report.page_view_count)
        };
    }

    private static makeCountWithTrend(data: any): beans.CountWithTrend {
        return {
            count: data.count,
            trend: data.trend,
            trendOffset: data.trend_offset
        }
    }
}
