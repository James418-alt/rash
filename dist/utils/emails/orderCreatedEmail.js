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
const OrderEmail = (user, customer) => __awaiter(void 0, void 0, void 0, function* () {
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
        subject: "Order Created",
        html: `  <body style="padding: 0; margin: 0; background-color: rgb(221, 220, 220)">
    <div
      style="background-color: rgb(221, 220, 220); padding: 12px; height: auto"
    >
      <h1 style="text-align: center">Order Confirmation</h1>

      <div>
        <p>You're getting this emial because a new order has been created</p>
        <div>
          <h3>Order Summary</h3>
          <div style="width: 100%">
            <div style="display: flex; gap: 10px; width: 100%">
              <p>Customer Name:</p>
              <p>${customer.name}</p>
            </div>
            <div style="display: flex; gap: 10px; width: 100%">
              <p>Customer Address:</p>
              <p>Address</p>
            </div>
            <div style="display: flex; gap: 10px; width: 100%">
              <p>Customer Name:</p>
              <p>Gomenti</p>
            </div>
            <div style="display: flex; gap: 10px; width: 100%">
              <p>Amount:</p>
              <p>#45,000.00</p>
            </div>
          </div>
        </div>

        <div>
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
            View Order
          </button>
        </div>
      </div>
    </div>
  </body>`,
    })
        .then(() => {
        (0, console_1.log)("Email Sent");
    });
});
exports.default = OrderEmail;
