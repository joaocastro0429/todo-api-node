import {Request,Response} from 'express'
import {User} from '../models/Todo'

export const Create=async(request:Request,response:Response)=>{
    const {title,done}=request.body

    await User.create({
        title,
        done
    })
    return response.status(201).json({messagem:"create !"})
}
export const Search=async(request:Request,response:Response)=>{
    const list = await User.findAll({})
    return response.json(list)   
   }

   export const todoUpdate = async (request: Request, response: Response) => {
    const { title, done } = request.body;
    const id = request.params.id;
    try {
        await User.update(
            { title, done },
            { where: { id } }
        )
    } catch (error) {
        return response.status(500).json("Internal server error");
    }
    return response.status(200).json("Update success ")
}


export const todoDelete= async (request: Request, response: Response) => {
    const id = request.params.id;
    try {
        await User.destroy({where:{id}})
    } catch (error) {
        return response.status(500).json("Internal server error");
    }
    return response.status(200).json("Deleted")
}

