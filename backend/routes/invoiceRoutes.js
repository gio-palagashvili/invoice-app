import express from "express";
import { createInvoice, getInvoice, userInvoices } from "../controllers/invoiceController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

//! prefix in parent "/invoice
export default router
    .post("/create", authMiddleware, createInvoice)
    .get("/user", authMiddleware, userInvoices)
    .get("/:id", authMiddleware, getInvoice)