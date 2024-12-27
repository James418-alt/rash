import passport from "passport";
import { Strategy } from "passport-local";
import myAgentModel from "../../model/agentModel";
import bcrypt from "bcrypt";
import { log } from "console";

passport.use(
  new Strategy({ usernameField: "email" }, async (email, password, done) => {
    // console.log(password);

    const user: any = await myAgentModel.findOne({ email });
    if (!user) {
      //   done(null, "User credentials not correct");
      throw new Error("User not found");
    }
    const compare = await bcrypt.compare(password, user.password);

    if (!compare) {
      //   done(null, "User credentials not correct");
      throw new Error("incorrect password");
    }
    if (user.verify !== true) {
      //   done(null, "User not verified");
      throw new Error("User not verified");
    }
    return done(null, user);
  })
);
passport.serializeUser((user: any, done) => {
  //   log(user._id);
  done(null, user._id);
});
passport.deserializeUser((user: any, done) => {
  done(null, user._id);
});
