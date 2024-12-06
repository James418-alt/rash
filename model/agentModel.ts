import { model, Schema, Types } from "mongoose";

const agentModel = new Schema({
  name: { type: String, require: true },
  coupon: { type: String },
  customers: [{ type: Types.ObjectId, ref: "users" }],
  orders: [{ type: Types.ObjectId, ref: "orders" }],
});

const myAgentModel = model("agents", agentModel);
export default myAgentModel;
