import { Router } from "express";
import { createAgent, deletAgent } from "../controller/agentContoller";

const agentRouter = Router();

agentRouter.post("/agentSignup", createAgent);
agentRouter.delete("/delete-agent/:agentId", deletAgent);
export default agentRouter;
