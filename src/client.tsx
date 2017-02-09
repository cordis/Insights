import * as React from "react";
import * as ReactDOM from "react-dom";
import * as injectTapEventPlugin from "react-tap-event-plugin";

import {AppBar} from "material-ui";
import {getMuiTheme} from "material-ui/styles";
import {blue500} from "material-ui/styles/colors";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Insights from "./insights";

injectTapEventPlugin();

let theme = getMuiTheme({
    palette: {
        accent1Color: blue500,
        primary1Color: blue500
    }
});

ReactDOM.render((
    <MuiThemeProvider muiTheme={theme}>
        <div>
            <AppBar />
            <Insights />
        </div>
    </MuiThemeProvider>
), document.getElementById("App"));
