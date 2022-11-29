import express from 'express'
import { VerifyToken } from '../middleware/verifyToken.middleware'
import { PetsController } from '../controllers/pets/pets.controller'
import upload from '../middleware/UploadImage.middleware'
const router = express.Router()
router.post(
    '/',
    [upload.single('image'), VerifyToken],
    PetsController.CreatePost
)
router.patch('/update/:id', VerifyToken, PetsController.UpdatePost)
router.delete('/delete/:id', VerifyToken, PetsController.DeletePost)
router.get('/fetchAll', PetsController.GetAll)
// router.get('/search', PetsController.GetItemBySearch)
export default router
