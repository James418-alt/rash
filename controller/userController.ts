import { Request, Response } from "express";
import myUserModel from "../model/userModel";
import { log } from "console";
import myAgentModel from "../model/agentModel";

export const Increase = async (req: Request, res: Response) => {
  const { ID } = req.params;
  const item: any = await myUserModel.findById(ID);
  const getD = await myUserModel.findByIdAndUpdate(
    ID,
    { charge: item.charge + 50 },
    { new: true }
  );
  res.status(200).json({
    message: "Charges updated",
    data: getD,
  });
};
export const Register = async (request: Request, response: Response) => {
  const { name, coupon } = request.body;
  const { agentId } = request.params;
  const admin = await myAgentModel.findById(agentId);
  if (admin) {
    if (admin?.coupon === coupon) {
      const getD = await myUserModel.create({ name, coupon, agentId: agentId });
      admin?.customers?.push(getD);
      admin?.save();
      response.status(200).json({
        message: "User Created Successfully",
        data: getD,
      });
    } else {
      response.status(400).json({
        message: "Agent Coupon Doesn't Exist",
      });
    }
  }
};
export const deleteUser = async (req: Request, res: Response) => {
  const { agentId, userId } = req.params;
  const agent = await myAgentModel.findById(agentId);
  const user = await myUserModel.findById(userId);
  if (agent) {
    if (user) {
      const getD = await myUserModel.findByIdAndDelete(userId);
      agent?.customers.pull(userId);
      agent?.save();
      res.status(200).json({
        message: "User Deleted",
        data: getD,
      });
    } else {
      res.status(400).json({
        message: "user not found",
      });
    }
  } else {
    res.status(400).json({
      message: "agent not found",
    });
  }
};
