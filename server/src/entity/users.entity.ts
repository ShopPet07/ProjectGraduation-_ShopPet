import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    Unique,
} from 'typeorm'
import { Pets } from './pets.entity'
import bcrypt from 'bcrypt'

@Entity({ name: 'users' })
@Unique(['email'])
export class Users {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    numberPhone: string

    @Column()
    address: string

    @Column({ default: 1 })
    role: number

    @Column()
    sex: string

    @Column()
    avatar: string

    @CreateDateColumn()
    createdAt: Date

    @OneToMany(() => Pets, (pet) => pet.user)
    pet: Pets[]

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password)
    }
}
