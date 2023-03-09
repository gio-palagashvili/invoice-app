import pg from "pg";
const Pool = pg.Pool;

const data = {
    user: "postgres",
    password: "root",
    host: "localhost",
    port: 5432,
    database: "invoice_app_db"
}

const pool = new Pool(data);

export default pool;