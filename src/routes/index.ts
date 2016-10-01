import * as express from "express";

export default class IndexRoute {
    public load(req: express.Request, res: express.Response, nex: express.NextFunction) {
        res.type("text/html");
        res.send("<p>I am a meme machine. I am a machine of memes.</p>");
    }
}