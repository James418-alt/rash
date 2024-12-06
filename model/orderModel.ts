import { model, Schema } from "mongoose";

const orderModel = new Schema({
  name: { type: String },
});

const myOrderModel = model("orders", orderModel);
export default myOrderModel;
