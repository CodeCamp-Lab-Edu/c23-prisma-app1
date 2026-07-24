import express from "express";
import prisma from "./lib/prisma.js";
import userRoutes from "./routes/user.routes.js"

const PORT = 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.end("Welcome Api");
});

app.use("/users", userRoutes)

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
