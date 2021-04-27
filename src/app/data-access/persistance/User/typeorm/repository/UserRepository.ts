import {getRepository, Repository} from "typeorm";
import {User} from "../entity/User";
import IUserRepository from "../../repository/IUserRepository";
import IUser from "../../dtos/IUser";

export default class UserRepository implements IUserRepository {
    private ormRepository: Repository<User>

    constructor() {
        this.ormRepository = getRepository(User);
    }

    create(user: IUser): Promise<IUser> {
        return Promise.resolve({} as IUser);
    }
}