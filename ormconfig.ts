import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { User } from 'src/users/entities/user.entity';

const config: MysqlConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    database: 'locket',
    password: 'password', // change to original password
    entities: [User],
    synchronize: true, // remove before deploying
    // migrations: [
    //   'dist/src/db/migrations/*.js'
    // ],
    // cli: {
    //   migrationsDir: 'src/db/migrations'
    // }
}

export default config;