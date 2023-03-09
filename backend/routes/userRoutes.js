import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js"
import { authMiddleware } from '../middlewares/authMiddleware.js'
const router = express.Router();

//! prefix in parent "/user"
router
    .post("/register", registerUser)
    .post("/login", loginUser)

export default router;