"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const agentModel = new mongoose_1.Schema({
    name: { type: String, require: true },
    coupon: { type: String },
    customers: [{ type: mongoose_1.Types.ObjectId, ref: "users" }],
    orders: [{ type: mongoose_1.Types.ObjectId, ref: "orders" }],
});
const myAgentModel = (0, mongoose_1.model)("agents", agentModel);
exports.default = myAgentModel;
