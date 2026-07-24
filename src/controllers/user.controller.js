import { findAllUsers } from "../services/user.service.js";

export async function getAllUsers(req, res) {
  const users = await findAllUsers();
  res.json(users);
}
