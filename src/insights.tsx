import * as React from "react";

import {Tabs} from "material-ui";
import {Tab} from "material-ui";

import Overview from "./ui/overview";


export default class Insights extends React.Component<{}, {}> {
    public render() {
        return (
            <Tabs>
                <Tab label="Overview">
                    <Overview />
                </Tab>
                <Tab label="Social"></Tab>
                <Tab label="Top Content"></Tab>
                <Tab label="Contributors"></Tab>
                <Tab label="Referrals"></Tab>
                <Tab label="Export"></Tab>
            </Tabs>
        );
    }
}
