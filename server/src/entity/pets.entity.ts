import { IsNotEmpty } from 'class-validator'
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'
import { ShoppingCart } from './cart.entity'
import { Order } from './order.entity'
// import { ShoppingCart } from './cart.entity'
import { Users } from './users.entity'

@Entity({ name: 'pets' })
export class Pets {
    @PrimaryGeneratedColumn()
    productId: number

    @Column()
    userId: number

    @Column()
    categoryId: number

    @Column()
    @IsNotEmpty()
    title: string

    @Column()
    @IsNotEmpty()
    description: string

    @Column()
    assess: number

    @Column()
    @IsNotEmpty()
    price: number

    @Column()
    @IsNotEmpty()
    species: string

    @Column()
    image: string

    @Column()
    poster: string

    @Column()
    posterPhoneNumber: number

    @Column({ default: 1 })
    number: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne(() => Users, (user) => user.pet)
    user: Users

    @ManyToOne(() => ShoppingCart, (cart) => cart.pet)
    cart: ShoppingCart

    @ManyToOne(() => Order, (order) => order.pet)
    order: Order
}
