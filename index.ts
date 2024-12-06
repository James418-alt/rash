import express, { Application } from "express";
import { dbConfig } from "./utils/dbConfig";
import router from "./router/userRouter";
import agentRouter from "./router/agentRouter";
import orderRoter from "./router/orderRouter";
const app: Application = express();
const port = 8811;
app.use(express.json());
app.use("/api", router);
app.use("/api", agentRouter);
app.use("/api", orderRoter);
app.listen(port, () => {
  console.clear();
  dbConfig();
});
