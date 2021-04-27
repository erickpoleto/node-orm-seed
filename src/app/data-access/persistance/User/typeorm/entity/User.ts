import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity("user")
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column()
    firstName: string | undefined;

    @Column()
    lastName: string | undefined;

    @Column()
    age: number | undefined;

}
