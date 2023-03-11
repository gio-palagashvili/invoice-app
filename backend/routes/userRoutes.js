import express from "express";
import { loginUser, registerUser, verifyToken } from "../controllers/userController.js"
import { authMiddleware } from '../middlewares/authMiddleware.js'
const router = express.Router();

//! prefix in parent "/user"
router
    .post("/register", registerUser)
    .post("/login", loginUser)
    .post("/verify", authMiddleware, verifyToken)

export default router;