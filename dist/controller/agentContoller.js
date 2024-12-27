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
exports.getAgent = exports.deletAgent = exports.resetPassword = exports.forgetPass = exports.verifyAgent = exports.LoginAgent = exports.createAgent = void 0;
const agentModel_1 = __importDefault(require("../model/agentModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const verificationEmail_1 = __importDefault(require("../utils/emails/verificationEmail"));
const crypto_1 = __importDefault(require("crypto"));
const forgetPasswordEmail_1 = __importDefault(require("../utils/emails/forgetPasswordEmail"));
const createAgent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, password, email } = req.body;
    // const rEmail = email.toLowerCase();
    const salt = yield bcrypt_1.default.genSalt(10);
    const hashed = yield bcrypt_1.default.hash(password, salt);
    const token = crypto_1.default.randomInt(100000, 999999);
    // log(token);
    const getD = yield agentModel_1.default.create({
        name,
        coupon: "bycs",
        email,
        password: hashed,
        verifyToken: token.toString(),
    });
    (0, verificationEmail_1.default)(getD);
    res.status(200).json({
        message: "Agent Created",
        data: getD,
    });
});
exports.createAgent = createAgent;
const LoginAgent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield agentModel_1.default.findOne({ email });
    if (user) {
        const passCheck = yield bcrypt_1.default.compare(password, user === null || user === void 0 ? void 0 : user.password);
        if (passCheck) {
            res.status(200).json({
                message: "Login Successful",
                data: user,
            });
        }
        else {
            res.status(400).json({
                message: "Incorrect Password",
            });
        }
    }
    else {
        res.status(400).json({
            message: "User doesn't exist",
        });
    }
});
exports.LoginAgent = LoginAgent;
const verifyAgent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { agentId } = req.params;
    const { verifyToken } = req.body;
    const agent = yield agentModel_1.default.findById(agentId);
    if (verifyToken === (agent === null || agent === void 0 ? void 0 : agent.verifyToken)) {
        const getD = yield agentModel_1.default.findByIdAndUpdate(agentId, { verify: true, verifyToken: null }, { new: true });
        res.status(200).json({
            message: "Agent Verified",
            data: getD,
        });
    }
    else {
        res.status(400).json({
            message: "Incorrect Verification code",
        });
    }
});
exports.verifyAgent = verifyAgent;
const forgetPass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const getD = yield agentModel_1.default.findOne({ email });
    if (getD) {
        (0, forgetPasswordEmail_1.default)(getD);
        res.status(200).json({
            message: "Agent Exists",
            data: getD,
        });
    }
    else {
        res.status(400).json({
            message: "Agent Doesn't Exist",
        });
    }
});
exports.forgetPass = forgetPass;
const resetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { newPassword } = req.body;
    const { agentId } = req.params;
    const salt = yield bcrypt_1.default.genSalt(10);
    const hash = yield bcrypt_1.default.hash(newPassword, salt);
    const agent = yield agentModel_1.default.findById(agentId);
    // log(agent?.password);
    const passs = agent === null || agent === void 0 ? void 0 : agent.password;
    const comp = yield bcrypt_1.default.compare(newPassword, passs);
    console.log(comp);
    if (comp) {
        res.status(200).json({
            message: "Sorry you can't use your current password",
        });
    }
    else {
        const getD = yield agentModel_1.default.findByIdAndUpdate(agentId, { password: hash }, { new: true });
        res.status(200).json({
            message: "Password Changed",
            data: getD,
        });
    }
});
exports.resetPassword = resetPassword;
const deletAgent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { agentId } = req.params;
    const getD = yield agentModel_1.default.findByIdAndDelete(agentId);
    res.status(200).json({
        message: "Agent Deleted",
        data: getD,
    });
});
exports.deletAgent = deletAgent;
const getAgent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { agentId } = req.params;
        const getD = yield agentModel_1.default.findById(agentId);
        res.status(200).json({
            message: "Agent found",
            data: getD,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAgent = getAgent;
