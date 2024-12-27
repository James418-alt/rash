import { log } from "console";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const sendEmail = async (user: any) => {
  const secret = process.env.JWT_SECRET as string;
  const token = jwt.sign({ id: user._id }, secret, { expiresIn: "3d" });
  const transport = nodemailer.createTransport({
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
      log("Email Sent");
    });
};

export default sendEmail;
