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
        let { id, billingAddress, city, postCode, country, date, due,
            net, status, clientEmail, clientName, description, total } = req.body.invoice1;
        id = generateString();
        let valid = validateInput(req.body.invoice1);
        if (valid.status !== "success") return res.status(400).json({ messages: valid.error, status: false });
        return res.sendStatus(200);
    } catch (error) {
        return res.status(400).json({ messages: error.message, status: false });
    }
}