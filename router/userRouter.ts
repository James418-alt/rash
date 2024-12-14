import { Router } from "express";
import {
  changeAgent,
  deleteUser,
  Increase,
  Register,
} from "../controller/userController";

const router = Router();
router.post("/register/:agentId", Register);
router.delete("/delete-user/:agentId/:userId", deleteUser);
router.patch("/update/:ID", Increase);
router.patch("/change-agent/:agentId/:userId", changeAgent);

export default router;
