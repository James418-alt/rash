import { model, Schema } from "mongoose";
interface iUser {
  name: string;
  email: string;
  charge: number;
}
const userModel = new Schema<iUser>(
  {
    name: { type: String },
    email: { type: String },
    charge: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const myUserModel = model("users", userModel);
export default myUserModel;
