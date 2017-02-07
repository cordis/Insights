import assign = require("object-assign");

import Axios from "axios";
import {Promise} from "ts-promise";

import {IClient} from "./interfaces";
import {AxiosResponse} from "axios";


export default class AxiosClient implements IClient {
    public get(pathTemplate: string, parameters: { [name: string]: any; }): Promise<any> {
        let deferred = Promise.defer<any>();
        let request = Request.makeInstance(pathTemplate, parameters);
        Axios.request({
                url: this.makeUrl(request.path),
                method: 'GET',
                params: request.params
            })
            .then((response: AxiosResponse) => deferred.resolve(response.data))
            .catch(deferred.reject);

        return deferred.promise;
    }

    private makeUrl(path: string): string {
        return path;
    }
}


class Request {
    public static makeInstance(pathTemplate: string, parameters: { [name: string]: any; }) {
        let queryParameters: { [name: string]: any; } = assign({}, parameters);
        let path = pathTemplate.replace(/{\w+}/, (match, name) => {
            if (parameters.hasOwnProperty(name)) {
                delete queryParameters[name];
                return parameters[name];
            }
            else {
                return match;
            }
        });

        return new Request(path, queryParameters);
    }

    public path: string;
    public params: Object;

    private constructor(path: string, params: {}) {
        this.path = path;
        this.params = params;
    }

}
