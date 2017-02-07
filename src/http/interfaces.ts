import {Promise} from "ts-promise";


export interface IClient {
    get(pathTemplate: string, parameters: {[name: string]: any}): Promise<any>;
}
