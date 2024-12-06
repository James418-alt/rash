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
exports.deleteUser = exports.Register = exports.Increase = void 0;
const userModel_1 = __importDefault(require("../model/userModel"));
const agentModel_1 = __importDefault(require("../model/agentModel"));
const Increase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ID } = req.params;
    const item = yield userModel_1.default.findById(ID);
    const getD = yield userModel_1.default.findByIdAndUpdate(ID, { charge: item.charge + 50 }, { new: true });
    res.status(200).json({
        message: "Charges updated",
        data: getD,
    });
});
exports.Increase = Increase;
const Register = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { name, coupon } = request.body;
    const { agentId } = request.params;
    const admin = yield agentModel_1.default.findById(agentId);
    if (admin) {
        if ((admin === null || admin === void 0 ? void 0 : admin.coupon) === coupon) {
            const getD = yield userModel_1.default.create({ name, coupon, agentId: agentId });
            (_a = admin === null || admin === void 0 ? void 0 : admin.customers) === null || _a === void 0 ? void 0 : _a.push(getD);
            admin === null || admin === void 0 ? void 0 : admin.save();
            response.status(200).json({
                message: "User Created Successfully",
                data: getD,
            });
        }
        else {
            response.status(400).json({
                message: "Agent Coupon Doesn't Exist",
            });
        }
    }
});
exports.Register = Register;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { agentId, userId } = req.params;
    const agent = yield agentModel_1.default.findById(agentId);
    const user = yield userModel_1.default.findById(userId);
    if (agent) {
        if (user) {
            const getD = yield userModel_1.default.findByIdAndDelete(userId);
            agent === null || agent === void 0 ? void 0 : agent.customers.pull(userId);
            agent === null || agent === void 0 ? void 0 : agent.save();
            res.status(200).json({
                message: "User Deleted",
                data: getD,
            });
        }
        else {
            res.status(400).json({
                message: "user not found",
            });
        }
    }
    else {
        res.status(400).json({
            message: "agent not found",
        });
    }
});
exports.deleteUser = deleteUser;
