import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column({ nullable : true})
    age : number;

    @Column()
    address: string;

    @Column({ nullable : true})
    phone : number;
}
