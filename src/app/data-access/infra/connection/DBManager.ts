import {createConnection} from "typeorm";
import {User} from "../../persistance/User/typeorm/entity/User";

class DBManager{
    connect() {
        createConnection({
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

export default new DBManager();