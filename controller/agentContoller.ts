import { Request, Response } from "express";
import myAgentModel from "../model/agentModel";

export const createAgent = async (req: Request, res: Response) => {
  const { name } = req.body;
  const getD = await myAgentModel.create({ name, coupon: "bycs" });
  res.status(200).json({
    message: "Agent Created",
    data: getD,
  });
};

export const deletAgent = async (req: Request, res: Response) => {
  const { agentId } = req.params;
  const getD = await myAgentModel.findByIdAndDelete(agentId);
  res.status(200).json({
    message: "Agent Deleted",
    data: getD,
  });
};
