import { Router } from "express";
import { deleteUser, Increase, Register } from "../controller/userController";

const router = Router();
router.post("/register/:agentId", Register);
router.delete("/delete-user/:agentId/:userId", deleteUser);
router.patch("/update/:ID", Increase);

export default router;
