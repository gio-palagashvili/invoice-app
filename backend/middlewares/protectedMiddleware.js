import jwt from "jsonwebtoken";
import db from "../config/db.js"

export const protectedMiddleware = async (req, res, next) => {
    if (req.header("authorization")?.startsWith("Bearer")) {
        try {
            const token = req.header("authorization").split(" ")[1];
            const user = jwt.decode(token, process.env.JWT);
            const getUser = await db.query("SELECT * FROM invoices_tbl WHERE invoice_id = $1", [req.body.id ? req.body.id : req.params.id]);
            if (getUser.rowCount == 0) return res.status(404).json({ message: "Invalid", status: false })
            if (getUser.rows[0].user_id != user.user_id) return res.status(401).json({ message: "ids don't match", status: false });
            req.user = getUser.rows[0];
        } catch (error) {
            return res.status(401).json({ message: error.message, status: false });
        }
    } else {
        return res.status(401).json({ message: "No token", status: false });
    }
    return next();
}
