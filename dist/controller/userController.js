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
exports.Register = exports.Increase = void 0;
const userModel_1 = __importDefault(require("../model/userModel"));
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
    const { name, email } = request.body;
    const remail = email.toLowerCase();
    const getD = yield userModel_1.default.create({ name, email });
    response.status(200).json({
        message: "User Created Successfully",
        data: getD,
    });
});
exports.Register = Register;
