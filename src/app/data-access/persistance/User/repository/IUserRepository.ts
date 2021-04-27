import IUser from "../dtos/IUser";

export default interface IUserRepository {
    create(user: IUser): Promise<IUser>;
}