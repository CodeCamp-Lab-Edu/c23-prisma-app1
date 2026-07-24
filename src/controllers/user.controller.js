import createError from "http-errors";
import { findAllUsers, findUserById } from "../services/user.service.js";

export async function getAllUsers(req, res, next) {
  try {
    const users = await findAllUsers();

    if (!users) {
      throw createError(400, "Users not found");
    }

    res.json(users);
  } catch (err) {
    next(err);
  }
}

export async function getUserById(req, res) {
  const id = Number(req.params.id);
  const user = await findUserById(id);

  if(!user) {
    throw createError(400, "User not found");
  }

  res.json(user);
}
