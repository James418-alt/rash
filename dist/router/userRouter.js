"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controller/userController");
const router = (0, express_1.Router)();
router.post("/register", userController_1.Register);
router.patch("/update/:ID", userController_1.Increase);
exports.default = router;