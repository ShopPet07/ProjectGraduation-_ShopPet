import express from 'express'
import { VerifyToken } from '../middleware/verifyToken.middleware'
import { PetsController } from '../controllers/pets/pets.controller'
const router = express.Router()
router.post('/', VerifyToken, PetsController.CreatePost)
router.patch('/update/:id', VerifyToken, PetsController.UpdatePost)
router.delete('/delete/:id', VerifyToken, PetsController.DeletePost)
router.get('/', PetsController.GetAll)
// router.get('/search', PetsController.GetItemBySearch)
export default router
