// import { Users } from '../entity/users.entity'
// import { Pets } from '../entity/pets.entity'
import { DataSource } from 'typeorm'
// import { ShoppingCart } from '../entity/cart.entity'
export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'shop-pet',
    synchronize: true,
    logging: true,
    entities: ['src/**/*.entity.ts'],
})
