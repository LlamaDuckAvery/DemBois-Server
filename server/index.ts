import * as express from "express";

export default class Server {
        public app: express.Application

        constructor() {
                this.app = express();
        
        }
}