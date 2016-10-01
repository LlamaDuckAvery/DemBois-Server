import * as express from "express";
import IndexRoute from "../routes/";
import CatsRoute from "../routes/cats";

export default class Server {
        public app: express.Application

        constructor() {
                this.app = express();
                this.routes();
        
        }
        private routes() {
                const router = express.Router();
                router.get("/", new IndexRoute().load);
                router.get("/cats", new CatsRoute().load);
                this.app.use(router);
        }

        public start() {
                this.app.listen(8080);
        }
}