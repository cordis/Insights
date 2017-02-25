import * as Express from "express";
import * as Chalk from "chalk";
import * as ErrorHandler from "errorhandler";

import {IServer, IConfig} from "./interfaces";


export class ExpressServer implements IServer {
    public static makeInstance(config: IConfig): ExpressServer {
        const instance: ExpressServer = new ExpressServer(Express());
        instance.configureApplication(config);
        return instance;
    }

    private application: Express.Application;

    private constructor(application: Express.Application) {
        this.application = application;
    }

    private configureApplication(config: IConfig) {
        this.application.use(config.staticPath, Express.static(config.staticDirectory));
        this.application.use(ErrorHandler());
        this.application.get('/', (request: Express.Request, response: Express.Response) => {
            response.sendFile(config.staticIndexPath);
        });
    }

    public run(port: number, host: string): void {
        this.application.set("port", port);
        this.application.set("host", host);
        this.application.listen(port, host, this.handleApplicationError.bind(this));
    }

    private handleApplicationError(error: any) {
        if (error) {
            this.logError(error);
        }
        else {
            this.logInfo(`Listening on ${this.application.get("host")}:${this.application.get("port")}`);
        }
    }

    private logError(error: any) {
        console.error(Chalk.bgRed(error));
    }

    private logInfo(message: string) {
        console.info(Chalk.bgBlack(message));
    }

}
