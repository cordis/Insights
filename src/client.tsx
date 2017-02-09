import * as React from "react";
import * as ReactDOM from "react-dom";
import * as injectTapEventPlugin from "react-tap-event-plugin";

import Insights from "./insights";

injectTapEventPlugin();

ReactDOM.render(<Insights />, document.getElementById("Insights"));
