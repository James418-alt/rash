import { Router } from "express";
import { createOrder, deleteOrder } from "../controller/orderController";

const orderRoter = Router();
orderRoter.post("/create-order/:userId", createOrder);
orderRoter.delete("/delete-order/:userId/:itemId", deleteOrder);
export default orderRoter;
