"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbConfig_1 = require("./utils/dbConfig");
const userRouter_1 = __importDefault(require("./router/userRouter"));
const agentRouter_1 = __importDefault(require("./router/agentRouter"));
const orderRouter_1 = __importDefault(require("./router/orderRouter"));
const cors_1 = __importDefault(require("cors"));
const passport_1 = __importDefault(require("passport"));
require("./utils/strategies/localStrategy");
const express_session_1 = __importDefault(require("express-session"));
const app = (0, express_1.default)();
const port = 8811;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api", userRouter_1.default);
app.use("/api", agentRouter_1.default);
app.use("/api", orderRouter_1.default);
app.use((0, express_session_1.default)({
    secret: "just-build",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 3600 },
}));
app.post("/api/signin", passport_1.default.authenticate("local"), (req, res) => {
    res.status(200).json({ message: "Login Successful", data: req.user });
});
app.listen(port, () => {
    console.clear();
    (0, dbConfig_1.dbConfig)();
});
