import { Router } from "express"
import {Create,Search,todoUpdate,todoDelete} from '../controllers/userController'

export const router=Router()

router.post("/todo",Create)
router.get("/todo",Search)
router.put("/todo/:id",todoUpdate)
router.delete("/todo/:id",todoDelete)





