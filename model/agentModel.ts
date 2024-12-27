import { model, Schema, Types } from "mongoose";

const agentModel = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String },
    coupon: { type: String },
    customers: [{ type: Types.ObjectId, ref: "users" }],
    orders: [{ type: Types.ObjectId, ref: "orders" }],
    verify: { type: Boolean, default: false },
    verifyToken: { type: String || null },
  },
  { timestamps: true }
);

const myAgentModel = model("agents", agentModel);
export default myAgentModel;
