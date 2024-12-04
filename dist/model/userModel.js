"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userModel = new mongoose_1.Schema({
    name: { type: String },
    email: { type: String },
    charge: { type: Number, default: 0 },
}, { timestamps: true });
const myUserModel = (0, mongoose_1.model)("users", userModel);
exports.default = myUserModel;
