import { log } from "console";
import nodemailer from "nodemailer";

const OrderEmail = async (user: any, customer: any) => {
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
      subject: "Order Created",
      html: `  <body style="padding: 0; margin: 0; background-color: rgb(221, 220, 220)">
    <div
      style="background-color: rgb(221, 220, 220); padding: 12px; height: auto"
    >
      <h1 style="text-align: center">Order Confirmation</h1>

      <div style="display: flex; flex-direction: column; gap: 20px">
        <p>You're getting this emial because a new order has been created</p>
        <div style="display: flex; flex-direction: column; line-height: 0px">
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
      log("Email Sent");
    });
};

export default OrderEmail;
