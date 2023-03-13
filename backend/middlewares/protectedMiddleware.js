import jwt from "jsonwebtoken";
import db from "../config/db.js"

export const protectedMiddleware = async (req, res, next) => {
    if (req.header("authorization")?.startsWith("Bearer")) {
        try {
            const token = req.header("authorization").split(" ")[1];
            const user = jwt.decode(token, process.env.JWT);
            const { id } = req.body;
            console.log(id)
            const getUser = await db.query("SELECT * FROM invoices_tbl WHERE invoice_id = $1", [id]);
            if (getUser.rowCount == 0) return res.status(404).json({ message: "Invalid token", status: false })
            if (getUser.rows[0].user_id != user.user_id) return res.status(401).json({ message: "not authorized", status: false });
            req.user = getUser.rows[0];
        } catch (error) {
            return res.status(401).json({ message: error.message, status: false });
        }
    } else {
        return res.status(401).json({ message: "No token", status: false });
    }
    return next();
}
