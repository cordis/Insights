import {IConfig, IServer} from "./interfaces";
import {ExpressServer} from "./express-impl";


export class ServerFactory {
    public makeServer(config: IConfig): IServer {
        return this.makeExpressServer(config);
    }

    private makeExpressServer(config: IConfig) {
        return ExpressServer.makeInstance(config);
    }
}
