import express from "express";
import { createInvoice } from "../controllers/invoiceController.js";

const router = express.Router();

//! prefix in parent "/invoice
export default router.post("/create", createInvoice);