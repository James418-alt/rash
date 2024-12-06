"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const agentContoller_1 = require("../controller/agentContoller");
const agentRouter = (0, express_1.Router)();
agentRouter.post("/agentSignup", agentContoller_1.createAgent);
agentRouter.delete("/delete-agent/:agentId", agentContoller_1.deletAgent);
exports.default = agentRouter;
