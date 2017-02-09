import { createAction } from "redux-actions";
import {async} from "ts-promise/dist/lib/async";

import * as Stats from '../services/stats';


export default class Actions {
    private static instance: Actions = null;

    public static getSingleton() {
        if (Actions.instance == null) {
            let stats = (new Stats.StatsFactory()).makeApi();
            Actions.instance = new Actions(stats);
        }
        return Actions.instance;
    }

    private stats: Stats.IApi;

    private constructor(stats: Stats.IApi) {
        this.stats = stats;
    }

    //public getPerformanceReport = createAction("GET_PERFORMANCE_REPORT", async ());
}
