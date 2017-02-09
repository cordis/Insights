import * as React from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import {blue500} from "material-ui/styles/colors";
import {AppBar} from "material-ui";
import {Tabs} from "material-ui";
import {Tab} from "material-ui";

export interface InsightsProps {
}

export default class Insights extends React.Component<InsightsProps, {}> {
    private theme: __MaterialUI.Styles.MuiTheme;

    constructor() {
        super();

        this.theme = getMuiTheme({
            palette: {
                accent1Color: blue500,
                primary1Color: blue500
            }
        });
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={this.theme}>
                <div>
                    <AppBar />
                    <Tabs>
                        <Tab label="Overview"></Tab>
                        <Tab label="Social"></Tab>
                        <Tab label="Top Content"></Tab>
                        <Tab label="Contributors"></Tab>
                        <Tab label="Referrals"></Tab>
                        <Tab label="Export"></Tab>
                    </Tabs>
                </div>
            </MuiThemeProvider>
        );
    }
}
