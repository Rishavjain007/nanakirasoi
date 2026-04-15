import express from "express";
import cors from "cors";
import paymentRoutes from "./routes/paymentRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/payment", paymentRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

export default app;
