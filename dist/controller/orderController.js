"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewAllOrder = exports.getAdminOrder = exports.getOneOrder = exports.deleteOrder = exports.createOrder = void 0;
const userModel_1 = __importDefault(require("../model/userModel"));
const orderModel_1 = __importDefault(require("../model/orderModel"));
const agentModel_1 = __importDefault(require("../model/agentModel"));
const orderCreatedEmail_1 = __importDefault(require("../utils/emails/orderCreatedEmail"));
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { userId } = req.params;
    const { name } = req.body;
    const user = yield userModel_1.default.findById(userId);
    const agent = yield agentModel_1.default.findById(user === null || user === void 0 ? void 0 : user.agentId);
    if (user) {
        const getD = yield orderModel_1.default.create({ name });
        (_a = user === null || user === void 0 ? void 0 : user.orders) === null || _a === void 0 ? void 0 : _a.push(getD);
        user === null || user === void 0 ? void 0 : user.save();
        (_b = agent === null || agent === void 0 ? void 0 : agent.orders) === null || _b === void 0 ? void 0 : _b.push(getD);
        agent === null || agent === void 0 ? void 0 : agent.save();
        (0, orderCreatedEmail_1.default)(agent, user);
        res.status(200).json({
            message: "Order Created",
            data: getD,
        });
    }
    else {
        res.status(200).json({
            message: "User not found",
        });
    }
});
exports.createOrder = createOrder;
const deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, itemId } = req.params;
    const user = yield userModel_1.default.findById(userId);
    const agent = yield agentModel_1.default.findById(user === null || user === void 0 ? void 0 : user.agentId);
    if (user) {
        const getD = yield orderModel_1.default.findByIdAndDelete(itemId);
        user === null || user === void 0 ? void 0 : user.orders.pull(getD);
        user === null || user === void 0 ? void 0 : user.save();
        agent === null || agent === void 0 ? void 0 : agent.orders.pull(getD);
        agent === null || agent === void 0 ? void 0 : agent.save();
        res.status(200).json({
            message: "Order Deleted",
            data: getD,
        });
    }
    else {
        res.status(400).json({
            message: "User not found",
        });
    }
});
exports.deleteOrder = deleteOrder;
const getOneOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, orderId } = req.params;
    const user = yield userModel_1.default.findById(userId);
    const item = yield orderModel_1.default.findById(orderId);
    if (user) {
        if (item) {
            res.status(200).json({
                message: "Order found",
                data: item,
            });
        }
        else {
            res.status(200).json({
                message: "Order not found",
            });
        }
    }
    else {
        res.status(200).json({
            message: "User doesn't exist",
        });
    }
});
exports.getOneOrder = getOneOrder;
const getAdminOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { agentId } = req.params;
    const getD = yield agentModel_1.default.findById(agentId).populate("orders");
    res.status(200).json({
        message: "Orders Found",
        data: getD === null || getD === void 0 ? void 0 : getD.orders,
    });
});
exports.getAdminOrder = getAdminOrder;
const viewAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const getD = yield userModel_1.default.findById(userId);
    res.status(200).json({
        message: "Orders Found",
        data: getD === null || getD === void 0 ? void 0 : getD.orders,
    });
});
exports.viewAllOrder = viewAllOrder;
