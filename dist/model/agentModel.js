"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const agentModel = new mongoose_1.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String },
    coupon: { type: String },
    customers: [{ type: mongoose_1.Types.ObjectId, ref: "users" }],
    orders: [{ type: mongoose_1.Types.ObjectId, ref: "orders" }],
    verify: { type: Boolean, default: false },
    verifyToken: { type: String || null },
}, { timestamps: true });
const myAgentModel = (0, mongoose_1.model)("agents", agentModel);
exports.default = myAgentModel;
