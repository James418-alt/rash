import { Router } from "express";
import {
  createOrder,
  deleteOrder,
  getAdminOrder,
  getOneOrder,
  viewAllOrder,
} from "../controller/orderController";

const orderRoter = Router();
orderRoter.post("/create-order/:userId", createOrder);
orderRoter.delete("/delete-order/:userId/:itemId", deleteOrder);
orderRoter.get("/get-one-order/:userId/:orderId", getOneOrder);
orderRoter.get("/get-all-orders", viewAllOrder);
orderRoter.get("/get-adminOrder/:agentId", getAdminOrder);
export default orderRoter;
