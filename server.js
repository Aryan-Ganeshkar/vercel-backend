import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import companyRoutes from "./routes/companyRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.json({ message: "Welcome to the API! Server is running 🚀" });
});

app.use("/api/companies", companyRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
