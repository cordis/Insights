import * as React from "react";

import {Tabs} from "material-ui";
import {Tab} from "material-ui";

export interface InsightsProps {
}

export default class Insights extends React.Component<InsightsProps, {}> {
    render() {
        return (
            <Tabs>
                <Tab label="Overview"></Tab>
                <Tab label="Social"></Tab>
                <Tab label="Top Content"></Tab>
                <Tab label="Contributors"></Tab>
                <Tab label="Referrals"></Tab>
                <Tab label="Export"></Tab>
            </Tabs>
        );
    }
}
