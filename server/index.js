import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoutes from "./routes/AuthRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("helthz", (_, res) => {
  return res.send("Server up and Running");
});

app.use("/api/auth", AuthRoutes);

const server = app.listen(process.env.PORT, () => {
  console.log("Server listening on port ", process.env.PORT);
});
