import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Pets } from './pets.entity'

@Entity({ name: 'order' })
export class Order {
    @PrimaryGeneratedColumn()
    orderId: number

    @Column()
    senderId: number

    @Column()
    recipientId: number

    @Column()
    transaction_code: number

    @Column()
    productId: number

    @OneToMany(() => Pets, (pet) => pet.order)
    pet: Pets[]
}
