import db from "../config/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import { validateInput } from "./utils/helpers.js";

const generateString = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let x = "";
    let y = "";

    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        x += alphabet.charAt(randomIndex);
    }
    for (let i = 0; i < 3; i++) {
        const randomNum = Math.floor(Math.random() * 10);
        y += randomNum.toString();
    }

    return x + y;
};

export const createInvoice = async (req, res) => {
    try {
        let { id, billingAddress, city, country, date, due,
            net, status, clientEmail, clientName, description, total, postCode } = req.body.invoice1;

        let tm = new Date(date);
        due = new Date(tm.setDate(tm.getDate() + parseInt(net)))

        id = generateString();
        status = status === "draft" ? "draft" : "pending";

        let valid = validateInput(req.body.invoice1);
        if (valid.status !== "success") return res.status(400).json({ messages: valid.error, status: false });
        const createInvoice = await
            db.query("INSERT INTO invoices_tbl(invoice_id, billing_address, billing_city, billing_country, due_date, invoice_total, user_id, description, initial_date, invoice_status, client_name, client_email, net, code) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,$11,$12,$13,$14)",
                [id, billingAddress, city, country,
                    due, total, req.user.user_id, description, date, status, clientName, clientEmail, net, postCode]);

        return res.status(200).json({ message: `invoice created with id ${id}`, status: true });
    } catch (error) {
        return res.status(400).json({ message: error.message, status: false });
    }
}