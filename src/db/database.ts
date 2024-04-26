import {Sequelize} from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

 export const sequelize=new Sequelize(
    process.env.DB_MYSQL as string,
    process.env.USER_MYSQL as string,
    process.env.PASSWORD_MYSQL,
    {
        dialect:'mysql',
        port:parseInt(process.env.PORT_MYSQL as string)
    }
)