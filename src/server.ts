import express from 'express'
import {router} from './router/userRouter'


const server=express()
server.use(express.json())
server.use(router)
server.use((request,response,next)=>{
    response.status(404).json({messagem:"NOT FUOUND !"})
    next()
})



server.listen(4000,()=>{
    console.log(`server running http://localhost:4000`)
})