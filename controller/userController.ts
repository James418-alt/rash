import { Request, Response } from "express";
import myUserModel from "../model/userModel";
import { log } from "console";

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
  const { name, email } = request.body;
  const remail = email.toLowerCase();
  const getD = await myUserModel.create({ name, email });
  response.status(200).json({
    message: "User Created Successfully",
    data: getD,
  });
};
