import { log } from "console";
import nodemailer from "nodemailer";

const forgetPassword = async (user: any) => {
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
      subject: "Reset Your Password",
      html: `<h1>Hello, ${user.name}, click on the link below to verify your email account</h1>
<p>Your Verification code is: ${user.verifyToken}</p>

<button style= "background-color: black; border: none;  border-radius: 12px; color: white; height: 40px; font-size: 15px;"> 
<a>Cick Here</a>
</button>`,
    })
    .then(() => {
      log("Email Sent");
    });
};

export default forgetPassword;
