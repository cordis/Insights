import * as _ from "underscore";
import * as React from "react";
import * as Material from "material-ui";

import * as Consts from "../consts";


export default class PerformanceCard extends React.Component<IProps, any> {
    public render(): React.ReactElement<any> {
        return (
            <Material.Card
                style={{width: "200px"}}
            >
                <Material.CardTitle
                    title={this.formatCount(this.props.count)}
                    subtitle={this.formatPeriod(this.props.metric, this.props.period)}
                />
                <Material.CardText>
                    <div className="ratio">{this.formatTrend(this.props.trend)}</div>
                    <div className="offset">{this.formatOffset(this.props.offset)}</div>
                </Material.CardText>
            </Material.Card>
        );
    }

    private formatPeriod(metric: string, period: string) {
        return (PerformanceCard.periodToFormatMap[period] || "{metric}").replace("{metric}", metric);
    }

    private static periodToFormatMap: {[period: string]: string} = PerformanceCard.makePeriodToFormatMap();
    private static makePeriodToFormatMap() {
        let periodToFormatMap: {[period: string]: string} = {};

        periodToFormatMap[Consts.PERIOD.SO_FAR_TODAY] = "{metric} so far today";
        periodToFormatMap[Consts.PERIOD.LAST_1_HOUR] = "{metric} last hour";
        periodToFormatMap[Consts.PERIOD.LAST_6_HOURS] = "{metric} last 6 hours";
        periodToFormatMap[Consts.PERIOD.LAST_12_HOURS] = "{metric} last 12 hours";
        periodToFormatMap[Consts.PERIOD.LAST_24_HOURS] = "{metric} last 24 hours";
        periodToFormatMap[Consts.PERIOD.YESTERDAY] = "{metric} yesterday";
        periodToFormatMap[Consts.PERIOD.LAST_7_DAYS] = "{metric} last 7 days";
        periodToFormatMap[Consts.PERIOD.LAST_30_DAYS] = "{metric} last 30 days";

        if (!_.all(Consts.PERIOD.ALL, period => _.has(periodToFormatMap, period))) {
            throw new Error("Not every period has a message template");
        }

        return periodToFormatMap;
    }

    private formatCount(count: number): string {
        let countString = (count / 1000).toFixed(1);
        return `${countString}K`;
    }

    private formatTrend(trend: number): string {
        let sign = this.chooseBySign(trend, "&nbsp;", "+", "-");
        let percent = (trend * 100).toFixed(2);
        return `${sign}${percent}%`;
    }

    private chooseBySign<T>(value: number, zero: T, positive: T, negative: T): T {
        if (Math.abs(value) < 0.0001) {
            return zero;
        }
        else if (value > 0) {
            return positive;
        }
        else if (value < 0) {
            return negative;
        }
    }

    private formatOffset(offset: string) {
        return offset;
    }
}


interface IProps {
    metric: string;
    period: string;
    offset: string;
    count: number;
    trend: number;
}
