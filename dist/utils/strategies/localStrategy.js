"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const agentModel_1 = __importDefault(require("../../model/agentModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
passport_1.default.use(new passport_local_1.Strategy({ usernameField: "email" }, (email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(password);
    const user = yield agentModel_1.default.findOne({ email });
    if (!user) {
        //   done(null, "User credentials not correct");
        throw new Error("User not found");
    }
    const compare = yield bcrypt_1.default.compare(password, user.password);
    if (!compare) {
        //   done(null, "User credentials not correct");
        throw new Error("incorrect password");
    }
    if (user.verify !== true) {
        //   done(null, "User not verified");
        throw new Error("User not verified");
    }
    return done(null, user);
})));
passport_1.default.serializeUser((user, done) => {
    //   log(user._id);
    done(null, user._id);
});
passport_1.default.deserializeUser((user, done) => {
    done(null, user._id);
});
