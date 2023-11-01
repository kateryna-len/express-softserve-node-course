import express from 'express'
import {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser,
  } from "../controllers/userControllers.js";


const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUserById).delete(deleteUser).put(updateUser);

export default router;