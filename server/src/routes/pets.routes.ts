import express from 'express'
import { VerifyToken } from '../middleware/verifyToken.middleware'
import { PetsController } from '../controllers/pets/pets.controller'
const router = express.Router()
router.post('/', VerifyToken, PetsController.createPet)
export default router
