import createError from "http-errors";
import {
  findAllUsers,
  findUserById,
  updateUserById,
  deleteUserById,
} from "../services/user.service.js";

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

  if (!user) {
    throw createError(400, "User not found");
  }

  res.json(user);
}

export async function updateUser(req, res) {
  const id = +req.params.id;
  const { name } = req.body;

  const updatedUser = await updateUserById(id, name);

  res.json({ message: "Updated", userId: updatedUser.id });
}

export async function deleteUser(req, res) {
  const id = +req.params.id;

  await deleteUserById(id);

  res.json({ message: "Deleted" });
}
