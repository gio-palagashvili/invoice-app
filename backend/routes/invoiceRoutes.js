import express from "express";
import { createInvoice } from "../controllers/invoiceController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

//! prefix in parent "/invoice
export default router.post("/create", authMiddleware, createInvoice);