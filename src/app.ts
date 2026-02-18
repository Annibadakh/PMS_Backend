import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";
import users from "./routes/user";

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);
app.use("/api/user", users);

export default app;