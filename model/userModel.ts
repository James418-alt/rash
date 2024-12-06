import { model, Schema, Types } from "mongoose";
interface iUser {
  name: string;
  coupon: string;
  orders: [{}];
  agentId: string;
}
const userModel = new Schema(
  {
    name: { type: String },
    coupon: { type: String, require: true },
    agentId: { type: String },
    orders: [{ type: Types.ObjectId, ref: "orders" }],
  },
  { timestamps: true }
);

const myUserModel = model("users", userModel);
export default myUserModel;
