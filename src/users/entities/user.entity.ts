import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';


@Entity({ name: 'users' })
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    country_code: string;

    @Column({ unique: true })
    phone_number: string;

    @Column()
    password: string;

    @CreateDateColumn()
    date_joined: Date;
}