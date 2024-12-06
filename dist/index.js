"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbConfig_1 = require("./utils/dbConfig");
const userRouter_1 = __importDefault(require("./router/userRouter"));
const agentRouter_1 = __importDefault(require("./router/agentRouter"));
const orderRouter_1 = __importDefault(require("./router/orderRouter"));
const app = (0, express_1.default)();
const port = 8811;
app.use(express_1.default.json());
app.use("/api", userRouter_1.default);
app.use("/api", agentRouter_1.default);
app.use("/api", orderRouter_1.default);
app.listen(port, () => {
    console.clear();
    (0, dbConfig_1.dbConfig)();
});
