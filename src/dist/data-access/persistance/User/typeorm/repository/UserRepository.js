"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
class UserRepository {
    constructor() {
        this.ormRepository = typeorm_1.getRepository(User_1.User);
    }
    create(user) {
        return Promise.resolve({});
    }
}
exports.default = UserRepository;
//# sourceMappingURL=UserRepository.js.map