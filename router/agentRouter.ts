import { Router } from "express";
import {
  createAgent,
  deletAgent,
  forgetPass,
  getAgent,
  LoginAgent,
  resetPassword,
  verifyAgent,
} from "../controller/agentContoller";

const agentRouter = Router();

agentRouter.post("/agentSignup", createAgent);
// agentRouter.post("/agent-signin", LoginAgent);
agentRouter.delete("/delete-agent/:agentId", deletAgent);
agentRouter.get("/getAgent", getAgent);
agentRouter.patch("/verify-agent/:agentId", verifyAgent);
agentRouter.post("/forget-password", forgetPass);
agentRouter.patch("/reset-password/:agentId", resetPassword);
export default agentRouter;
