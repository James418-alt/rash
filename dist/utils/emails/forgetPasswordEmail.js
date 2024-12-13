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
const console_1 = require("console");
const nodemailer_1 = __importDefault(require("nodemailer"));
const forgetPassword = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const transport = nodemailer_1.default.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for port 465, false for other ports
        auth: {
            user: "ebifegha123@gmail.com",
            pass: "cpqxefelqhxftafc",
        },
    });
    transport
        .sendMail({
        from: `WasherMan <ebifegha123@gmail.com>`,
        to: `${user.email}`,
        subject: "Reset Your Password",
        html: `<h1>Hello, ${user.name}, click on the link below to verify your email account</h1>
<p>Your Verification code is: ${user.verifyToken}</p>

<button style= "background-color: black; border: none;  border-radius: 12px; color: white; height: 40px; font-size: 15px;"> 
<a>Cick Here</a>
</button>`,
    })
        .then(() => {
        (0, console_1.log)("Email Sent");
    });
});
exports.default = forgetPassword;
