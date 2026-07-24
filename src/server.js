import express from "express";
import { errorHandler } from "./middleware/error-handler.js";
import userRoutes from "./routes/user.routes.js"

const PORT = 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.end("Welcome Api");
});

app.use("/users", userRoutes)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
