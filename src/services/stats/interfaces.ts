import {Promise} from "ts-promise";

import * as beans from "./beans";


export interface IApi {
    getPerformanceReport(siteId: number, criteria: beans.Criteria): Promise<beans.PerformanceReport>;
}


export interface IProtocol {
    makePerformanceReport(response: any): beans.PerformanceReport;
}
