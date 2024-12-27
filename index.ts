import express, { Application, NextFunction, Request, Response } from "express";
import { dbConfig } from "./utils/dbConfig";
import router from "./router/userRouter";
import agentRouter from "./router/agentRouter";
import orderRoter from "./router/orderRouter";
import cors from "cors";
import passport from "passport";

import "./utils/strategies/localStrategy";
import session from "express-session";
import { log } from "console";
const app: Application = express();
const port = 8811;
app.use(express.json());
app.use(cors());
app.use("/api", router);
app.use("/api", agentRouter);
app.use("/api", orderRoter);
app.use(
  session({
    secret: "just-build",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 3600 },
  })
);
app.post(
  "/api/signin",
  passport.authenticate("local"),
  (req: Request, res: Response) => {
    res.status(200).json({ message: "Login Successful", data: req.user });
  }
);

app.listen(port, () => {
  console.clear();
  dbConfig();
});
