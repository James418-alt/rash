import { Router } from "express";
import { Increase, Register } from "../controller/userController";

const router = Router();
router.post("/register", Register);
router.patch("/update/:ID", Increase);

export default router;
