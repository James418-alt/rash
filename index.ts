import express, { Application } from "express";
import { dbConfig } from "./utils/dbConfig";
import router from "./router/userRouter";
const app: Application = express();
const port = 8811;
app.use(express.json());
app.use("/api", router);
app.listen(port, () => {
  console.clear();
  dbConfig();
});
