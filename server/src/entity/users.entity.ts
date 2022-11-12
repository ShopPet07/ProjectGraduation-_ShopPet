import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    Unique,
} from 'typeorm'
import { Pets } from './pets.entity'
import bcrypt from 'bcrypt'
import { ShoppingCart } from './cart.entity'
// import { ShoppingCart } from './cart.entity'

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

    @Column()
    cartId: number

    @CreateDateColumn()
    createdAt: Date

    @OneToMany(() => Pets, (pet) => pet.user)
    pet: Pets[]

    @OneToOne(() => ShoppingCart, (cart) => cart.user) // specify inverse side as a second parameter
    cart: ShoppingCart

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password)
    }
}
