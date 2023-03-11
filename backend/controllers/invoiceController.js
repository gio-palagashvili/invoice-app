import db from "../config/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import { validateInput, generateString } from "./utils/helpers.js";

export const createInvoice = async (req, res) => {
    try {
        let { id, billingAddress, city, country, date, due,
            net, status, clientEmail, clientName, description, total, postCode, itemList } = req.body.invoice1;
        let tm = new Date(date);
        due = new Date(tm.setDate(tm.getDate() + parseInt(net)))

        id = generateString();
        status = status === "draft" ? "draft" : "pending";

        let valid = validateInput(req.body.invoice1);
        if (valid.status !== "success") return res.status(400).json({ messages: valid.error, status: false });
        const createInvoice = await
            db.query("INSERT INTO invoices_tbl(invoice_id, billing_address, billing_city, billing_country, due_date, invoice_total, user_id, description, initial_date, invoice_status, client_name, client_email, net, code) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,$11,$12,$13,$14) returning index",
                [id, billingAddress, city, country,
                    due, total, req.user.user_id, description, date, status, clientName, clientEmail, net, postCode]);

        await Promise.all(itemList.map(async (item) => {
            const createItems = await db.query("INSERT INTO invoice_item_tbl( qty, price, total, invoice_index, item_name) VALUES($1, $2, $3, $4, $5)",
                [item.qty, item.price, item.total, createInvoice.rows[0].index, item.itemName]);
        }));

        return res.status(200).json({ message: `invoice created with id ${id}`, status: true });
    } catch (error) {
        return res.status(400).json({ message: error.message, status: false });
    }
}