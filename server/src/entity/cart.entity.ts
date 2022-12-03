import {
    Column,
    Entity,
    OneToMany,
    OneToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn,
} from 'typeorm'
import { Pets } from './pets.entity'
import { Users } from './users.entity'

@Entity({ name: 'cart' })
export class ShoppingCart {
    @PrimaryGeneratedColumn()
    cartId: number

    @Column()
    productId: number

    @Column()
    userId: number

    @OneToMany(() => Pets, (pet) => pet.cart)
    pet: Pets[]

    @OneToOne(() => Users, (user) => user.cart) // specify inverse side as a second parameter
    user: Users
}
