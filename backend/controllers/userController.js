import db from "../config/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

export const registerUser = async (req, res) => {
    let { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ message: "Fill out all the form", status: false });
    try {
        const checkUser = await db.query("select user_id from users_tbl where username = $1", [username])
        if (checkUser.rowCount != 0) return res.status(400).json({ message: "user already exists", status: false });

        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);

        const createUser = await db.query("insert into users_tbl(username, password) values($1, $2)", [username, password]);
        delete createUser.rows[0].password;
        res.status(200).json({
            token: jwt.sign({ user: createUser.rows[0], }, process.env.JWT, { expiresIn: "100d" }),
            status: "success"
        });
    } catch (error) {
        return res.status(401).json({ message: error.message, status: false });
    }
}
export const loginUser = async (req, res) => {
}