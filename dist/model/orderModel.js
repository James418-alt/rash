"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderModel = new mongoose_1.Schema({
    name: { type: String },
});
const myOrderModel = (0, mongoose_1.model)("orders", orderModel);
exports.default = myOrderModel;
