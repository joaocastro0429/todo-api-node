import { Model, DataTypes} from 'sequelize'
import {sequelize} from '../db/database'


interface dataBaseInstance extends Model{
    id:number,
    title:string
    done:boolean


}

export const User=sequelize.define<dataBaseInstance>('Todo',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    title:{
        type:DataTypes.STRING,
        
    },
    done:{
        type:DataTypes.BOOLEAN
    }
},{
    timestamps:false,
    tableName:"todo"

})