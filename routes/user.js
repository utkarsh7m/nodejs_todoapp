import express from 'express';
import { register, login, getMyProfile, logout } from '../controller/user.js';
import { isAuthenticated } from '../middleWare/auth.js';
const router = express.Router()

router.post("/new",register)
router.post("/login",login)
router.get("/logout",logout)
router.get("/me",isAuthenticated,getMyProfile)
export default router