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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sendEmail = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const secret = process.env.JWT_SECRET;
    const token = jsonwebtoken_1.default.sign({ id: user._id }, secret, { expiresIn: "3d" });
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
        subject: "Verify Your Email Account",
        html: `  <div
      style="background-color: rgb(221, 220, 220); padding: 12px; height: auto"
    >
      <h1 style="text-align: center">Verify your email address.</h1>
      <p>Hi, ${user.name}</p>

      <p>
        Someone tried to sign up for a WasherMan account with ${user.email} if it was
        you, enter this verification code in the app:
      </p>
      <h1>${user.verifyToken}</h1>
      <button
        style="
          border: none;
          background-color: black;
          color: white;
          font-size: 18px;
          padding: 10px;
          font-weight: bold;
        "
      >
        <a href="${process.env.URL}/verify/${token}">Verify Account</a>
       
      </button>
    </div>`,
    })
        .then(() => {
        (0, console_1.log)("Email Sent");
    });
});
exports.default = sendEmail;
