import express from 'express'
import { VerifyToken } from '../middleware/verifyToken.middleware'
import { PetsController } from '../controllers/pets/pets.controller'
const router = express.Router()
router.post('/', VerifyToken, PetsController.CreatePost)
router.patch('/update/:id', VerifyToken, PetsController.UpdatePost)
router.delete('/delete/:id', VerifyToken, PetsController.DeletePost)
export default router
