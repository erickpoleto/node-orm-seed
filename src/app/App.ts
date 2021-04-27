import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import routes from "./api/routes/routes";
import cors from 'cors';

import DBManager from "./data-access/infra/connection/DBManager";

class App {

    express: express.Application;

    constructor() {
        this.express = express();
        this.middlewares();
        this.initDatabase();
        this.router();
    }

    initDatabase(){
        DBManager.connect();
    }

    middlewares(){
        this.express.use(cors())
        this.express.set("API_PORT", process.env.API_PORT);
        this.express.use(express.static('public'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: true }));
    }

    router() {
        this.express.use(routes)
    }
}

export default new App().express;
