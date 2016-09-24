import * as express from "express";

export default class IndexRoute {
    public load(req: express.Request, res: express.Response, nex: express.NextFunction) {
        res.render("index");  
    }
}