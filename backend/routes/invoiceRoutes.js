import express from "express";
import { createInvoice, deleteInvoice, getInvoice, setPaid, userInvoices } from "../controllers/invoiceController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { protectedMiddleware } from "../middlewares/protectedMiddleware.js";

const router = express.Router();

//! prefix in parent "/invoice
export default router
    .post("/create", authMiddleware, createInvoice)
    .get("/user", authMiddleware, userInvoices)
    .get("/:id", authMiddleware, getInvoice)
    .patch("/set-paid", protectedMiddleware, setPaid)
    .delete("/delete", protectedMiddleware, deleteInvoice)