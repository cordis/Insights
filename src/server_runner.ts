import * as Path from "path";

import * as Server from "./server";

const PORT = 8080;
const HOST = "localhost";
const config: Server.IConfig = {
    staticPath: "/public",
    staticDirectory: Path.join(__dirname, "../build"),
    staticIndexPath: Path.join(__dirname, "../index.html"),
};

(new Server.ServerFactory())
    .makeServer(config)
    .run(PORT, HOST);
