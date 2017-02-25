import * as React from "react";

import {GridList} from "material-ui";
import {GridTile} from "material-ui";


export default class Overview extends React.Component<{}, {}> {
    public render() {
        return (
            <div style={styles.root as any}>
                <GridList style={styles.gridList} cols={2.2}>
                    <GridTile
                        key="views-last-hour"
                        title="Views Last Hour"
                        titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                    >VLH</GridTile>
                    <GridTile
                        key="views-by-criteria"
                        title="Views By Criteria"
                        titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                    >VBC</GridTile>
                </GridList>
            </div>
        );
    }
}


const styles = {
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    gridList: {
        display: "flex",
        flexWrap: "nowrap",
        overflowX: "auto",
    },
    titleStyle: {
        color: "rgb(0, 188, 212)",
    },
};
