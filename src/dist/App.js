"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./api/routes/routes"));
const cors_1 = __importDefault(require("cors"));
const DBManager_1 = __importDefault(require("./data-access/infra/connection/DBManager"));
class App {
    constructor() {
        this.express = express_1.default();
        this.middlewares();
        this.initDatabase();
        this.router();
    }
    initDatabase() {
        DBManager_1.default.connect();
    }
    middlewares() {
        this.express.use(cors_1.default());
        this.express.set("API_PORT", process.env.API_PORT);
        this.express.use(express_1.default.static('public'));
        this.express.use(body_parser_1.default.json());
        this.express.use(body_parser_1.default.urlencoded({ extended: true }));
    }
    router() {
        this.express.use(routes_1.default);
    }
}
exports.default = new App().express;
//# sourceMappingURL=App.js.map