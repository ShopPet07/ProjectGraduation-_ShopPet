import express from 'express'
import { UsersController } from '../controllers/users/users.controller'
import { VerifyToken } from '../middleware/verifyToken.middleware'

const router = express.Router()
router.get('/getme/:id', VerifyToken, UsersController.GetMe)
router.get('/all', VerifyToken, UsersController.GetAllPetPost)
// router.get('/', VerifyToken, UsersController.GettAllProductInCart)
export default router
