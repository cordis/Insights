import {IClient} from "./interfaces";
import AxiosClient from "./axios";


export default class HttpFactory {
    public makeClient(): IClient {
        return new AxiosClient();
    }

}
