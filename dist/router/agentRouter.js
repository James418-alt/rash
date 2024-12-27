"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const agentContoller_1 = require("../controller/agentContoller");
const agentRouter = (0, express_1.Router)();
agentRouter.post("/agentSignup", agentContoller_1.createAgent);
// agentRouter.post("/agent-signin", LoginAgent);
agentRouter.delete("/delete-agent/:agentId", agentContoller_1.deletAgent);
agentRouter.get("/getAgent", agentContoller_1.getAgent);
agentRouter.patch("/verify-agent/:agentId", agentContoller_1.verifyAgent);
agentRouter.post("/forget-password", agentContoller_1.forgetPass);
agentRouter.patch("/reset-password/:agentId", agentContoller_1.resetPassword);
exports.default = agentRouter;
