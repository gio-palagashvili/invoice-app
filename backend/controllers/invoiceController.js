import db from "../config/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

export const createInvoice = async (req, res) => {
    const { invoice_id, address, city, country, due_date } = req.body;
}