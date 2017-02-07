import HttpFactory from "../../http/factory";

import * as interfaces from "./interfaces";
import Api from "./api";
import Protocol from "./protocol";


export default class StatsFactory {
    public makeApi(): interfaces.IApi {
        let client = this.makeHttpClient();
        let protocol = new Protocol();
        return new Api(client, protocol);
    }

    private makeHttpClient() {
        return (new HttpFactory()).makeClient();
    }

}
