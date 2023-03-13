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
export const userInvoices = async (req, res) => {
    try {
        const getInvoices = await db.query("SELECT * FROM invoices_tbl where user_id = $1 limit 10", [req.user.user_id])
        return res.status(200).json({ status: true, invoices: getInvoices.rows });
    } catch (error) {
        return res.status(400).json({ messgae: error.message, status: false });
    }
};
export const getInvoice = async (req, res) => {
    const id = req.params.id;
    try {
        // const getInvoiceWithItems = await db.query("SELECT invoices_tbl.*, invoice_item_tbl.* FROM invoices_tbl INNER JOIN invoice_item_tbl ON invoices_tbl.index = invoice_item_tbl.invoice_index WHERE invoices_tbl.invoice_id = $1", [id]);
        const getInvoice = await db.query("SELECT * FROM invoices_tbl where invoice_id = $1", [id])
        if (getInvoice.rowCount == 0) {
            return res.status(400).json({ messgae: "invalid id", status: false });
        }
        const getItems = await db.query("SELECT * FROM invoice_item_tbl where invoice_index = $1", [getInvoice.rows[0].index])
        getInvoice.rows[0].itemList = getItems.rows;

        return res.status(200).json({ status: true, invoice: getInvoice.rows[0] });
    } catch (error) {
        return res.status(400).json({ messgae: error.message, status: false });
    }
}
export const setPaid = async (req, res) => {
    const id = req.body.id;
    try {
        const set = await db.query("UPDATE public.invoices_tbl SET invoice_status = 'paid' WHERE invoice_id = $1", [id]);
        const mess = set.rowCount == 0 ? "updated" : "no rows were affected";
        return res.status(200).json({ message: mess, status: true });
    } catch (error) {
        return res.status(400).json({ messgae: error.message, status: false });
    }
}