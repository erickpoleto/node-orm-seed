"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
class Server {
    constructor() {
        this.listen();
    }
    listen() {
        App_1.default.listen(process.env.API_PORT, () => {
            console.info('started');
        });
    }
}
exports.default = new Server();
//# sourceMappingURL=index.js.map