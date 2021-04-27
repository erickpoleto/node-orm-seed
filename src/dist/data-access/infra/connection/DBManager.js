"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class DBManager {
    connect() {
        typeorm_1.createConnection({
            "type": "postgres",
            "host": String(process.env.DB_HOST),
            "port": Number(process.env.DB_PORT),
            "username": String(process.env.DB_USERNAME),
            "password": String(process.env.DB_PASSWORD),
            "database": String(process.env.DB_DATABASE),
            "synchronize": true,
            "logging": false,
            "entities": [
                "../../**/**/**/entity/*.ts"
            ],
            "migrations": [
                "../migration/**/*.ts"
            ],
        }).then();
    }
}
exports.default = new DBManager();
//# sourceMappingURL=DBManager.js.map