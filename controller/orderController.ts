import { Request, Response } from "express";
import myUserModel from "../model/userModel";
import myOrderModel from "../model/orderModel";
import myAgentModel from "../model/agentModel";
import { Types } from "mongoose";

export const createOrder = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { name } = req.body;
  const user = await myUserModel.findById(userId);
  const agent = await myAgentModel.findById(user?.agentId);
  if (user) {
    const getD = await myOrderModel.create({ name });
    user?.orders?.push(getD);
    user?.save();
    agent?.orders?.push(getD);
    agent?.save();
    res.status(200).json({
      message: "Order Created",
      data: getD,
    });
  } else {
    res.status(200).json({
      message: "User not found",
    });
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  const { userId, itemId } = req.params;
  const user = await myUserModel.findById(userId);
  const agent = await myAgentModel.findById(user?.agentId);
  if (user) {
    const getD = await myOrderModel.findByIdAndDelete(itemId);
    user?.orders.pull(getD);
    user?.save();
    agent?.orders.pull(getD);
    agent?.save();
    res.status(200).json({
      message: "Order Deleted",
      data: getD,
    });
  } else {
    res.status(400).json({
      message: "User not found",
    });
  }
};
