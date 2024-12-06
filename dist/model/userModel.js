"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userModel = new mongoose_1.Schema({
    name: { type: String },
    coupon: { type: String, require: true },
    agentId: { type: String },
    orders: [{ type: mongoose_1.Types.ObjectId, ref: "orders" }],
}, { timestamps: true });
const myUserModel = (0, mongoose_1.model)("users", userModel);
exports.default = myUserModel;
