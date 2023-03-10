import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";
import userRoutes from "./routes/userRoutes.js"
import invoiceRoutes from "./routes/invoiceRoutes.js";

const app = express();
dotenv.config({ path: ".env" });

const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

//routes
app.use("/user", userRoutes);
app.use("/invoice", invoiceRoutes);
app.use(errorHandlerMiddleware);

app.listen(port, () => {
    console.log(`${colors.italic(`App running on port`)} ${colors.italic.bold.underline(port)}`);
})