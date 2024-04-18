import express from "express";
import { updateUser } from "../controllers/user.controller.js";

const router = express.Router();

route.post("/update/:id", updateUser);

export default router;
