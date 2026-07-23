import express from "express";
import prisma from "./lib/prisma.js";

const PORT = 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.end("Welcome Api");
});

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany({
    include: { posts: true}
  });
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
