import jwt from "jsonwebtoken";
import db from "../config/db.js"

export const authMiddleware = async (req, res, next) => {
    if (req.header("authorization")?.startsWith("Bearer")) {
        try {
            const token = req.header("authorization").split(" ")[1];
            const user = jwt.decode(token, process.env.JWT);
            const getUser = await db.query("SELECT * FROM users_tbl WHERE user_id = $1", [user.user_id]);
            if (getUser.rowCount == 0) return next(res.status(404)).json({ message: "ss", status: false });
            req.user = getUser.rows[0];
            next();
        } catch (error) {
            return next(res.status(401).json({ message: error.message, status: false }));
        }
    } else {
        return next(res.status(404).json({ message: "No token", status: false }));
    }
}
