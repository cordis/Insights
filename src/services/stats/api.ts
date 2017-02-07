import {Promise} from "ts-promise";

import {IClient} from "../../http/interfaces";

import {IApi, IProtocol} from "./interfaces";
import * as beans from "./beans";


export default class Api implements IApi {
    private client: IClient;
    private protocol: IProtocol;

    public constructor(client: IClient, protocol: IProtocol) {
        this.client = client;
        this.protocol = protocol;
    }

    public getPerformanceReport(siteId: number, criteria: beans.Criteria): Promise<beans.PerformanceReport> {
        let parameters: { [name: string]: any } = {
            site_id: siteId,
            section_id: criteria.sectionId
        };
        parameters = this.extendWithPeriod(parameters, criteria);
        parameters = this.extendWithTrendOffset(parameters, criteria);
        return this.client
            .get('/{site_id}/reports/paid/performance', parameters)
            .then(this.protocol.makePerformanceReport);
    }

    private extendWithPeriod(parameters: {[p: string]: any}, criteria: beans.Criteria): {[p: string]: any} {
        parameters['period'] = "custom";
        parameters['min_ts'] = criteria.period.minTimestamp;
        parameters['max_ts'] = criteria.period.maxTimestamp;
        parameters['until_now'] = criteria.period.untilNow;
        return parameters;
    }

    private extendWithTrendOffset(parameters: {[p: string]: any}, criteria: beans.Criteria): {[p: string]: any} {
        parameters['trendOffset'] = criteria.trendOffset;
        return parameters;
    }

}
