import * as React from "react";

import * as Consts from "../consts";
import PerformanceCard from "./performance-card";


export default class Overview extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <PerformanceCard
                    metric="views"
                    period={Consts.PERIOD.LAST_12_HOURS}
                    offset={Consts.PERIOD.LAST_7_DAYS}
                    count={356123}
                    trend={+0.2816}
                />
                <PerformanceCard
                    metric="clicks"
                    period={Consts.PERIOD.LAST_30_DAYS}
                    offset={Consts.PERIOD.LAST_30_DAYS}
                    count={123112}
                    trend={-0.3016}
                />
            </div>
        );
    }
}
