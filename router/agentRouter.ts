import { Router } from "express";
import {
  createAgent,
  deletAgent,
  forgetPass,
  resetPassword,
  verifyAgent,
} from "../controller/agentContoller";

const agentRouter = Router();

agentRouter.post("/agentSignup", createAgent);
agentRouter.delete("/delete-agent/:agentId", deletAgent);
agentRouter.patch("/verify-agent/:agentId", verifyAgent);
agentRouter.post("/forget-password", forgetPass);
agentRouter.patch("/reset-password/:agentId", resetPassword);
export default agentRouter;
