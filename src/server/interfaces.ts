export interface IConfig {
    staticPath: string;
    staticDirectory: string;
    staticIndexPath: string;
}


export interface IServer {
    run(port: number, host: string): void;
}
