import express from 'express'
import { CheckAuthorization } from '../middleware/CheckAuthorization.middleware'
import { UsersController } from '../controllers/users/users.controller'
import { VerifyToken } from '../middleware/verifyToken.middleware'

const router = express.Router()
router.get('/getme', UsersController.GetMe)
router.get('/all', VerifyToken, UsersController.GetAllPetPost)
router.get('/', CheckAuthorization, UsersController.GetAllUserAdmin)
router.patch('/upate/:id', UsersController.UpdateUser)
// router.get('/', VerifyToken, UsersController.GettAllProductInCart)
export default router
