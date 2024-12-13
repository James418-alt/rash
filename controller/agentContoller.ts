import { Request, Response } from "express";
import myAgentModel from "../model/agentModel";
import bcrypt from "bcrypt";
import sendEmail from "../utils/emails/verificationEmail";
import crypto from "crypto";
import { log } from "console";
import forgetPassword from "../utils/emails/forgetPasswordEmail";

export const createAgent = async (req: Request, res: Response) => {
  const { name, password, email } = req.body;
  const rEmail = email.toLowerCase();
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);
  const token = crypto.randomInt(100000, 999999);
  // log(token);
  const getD = await myAgentModel.create({
    name,
    coupon: "bycs",
    email: rEmail,
    password: hashed,
    verifyToken: token,
  });
  sendEmail(getD);
  res.status(200).json({
    message: "Agent Created",
    data: getD,
  });
};

export const verifyAgent = async (req: Request, res: Response) => {
  const { agentId } = req.params;
  const { verifyToken } = req.body;
  const agent = await myAgentModel.findById(agentId);
  if (verifyToken === agent?.verifyToken) {
    const getD = await myAgentModel.findByIdAndUpdate(
      agentId,
      { verify: true, verifyToken: null },
      { new: true }
    );
    res.status(200).json({
      message: "Agent Verified",
      data: getD,
    });
  } else {
    res.status(400).json({
      message: "Incorrect Verification code",
    });
  }
};

export const forgetPass = async (req: Request, res: Response) => {
  const { email } = req.body;
  const getD = await myAgentModel.findOne({ email });
  if (getD) {
    forgetPassword(getD);
    res.status(200).json({
      message: "Agent Exists",
      data: getD,
    });
  } else {
    res.status(400).json({
      message: "Agent Doesn't Exist",
    });
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  const { newPassword } = req.body;
  const { agentId } = req.params;
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(newPassword, salt);

  const agent = await myAgentModel.findById(agentId);
  // log(agent?.password);
  const passs: any = agent?.password;
  const comp = await bcrypt.compare(newPassword, passs);
  console.log(comp);

  if (comp) {
    res.status(200).json({
      message: "Sorry you can't use your current password",
    });
  } else {
    const getD = await myAgentModel.findByIdAndUpdate(
      agentId,
      { password: hash },
      { new: true }
    );
    res.status(200).json({
      message: "Password Changed",
      data: getD,
    });
  }
};

export const deletAgent = async (req: Request, res: Response) => {
  const { agentId } = req.params;
  const getD = await myAgentModel.findByIdAndDelete(agentId);
  res.status(200).json({
    message: "Agent Deleted",
    data: getD,
  });
};
