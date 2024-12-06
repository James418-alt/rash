"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderController_1 = require("../controller/orderController");
const orderRoter = (0, express_1.Router)();
orderRoter.post("/create-order/:userId", orderController_1.createOrder);
orderRoter.delete("/delete-order/:userId/:itemId", orderController_1.deleteOrder);
exports.default = orderRoter;
