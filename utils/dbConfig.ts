import { log } from "console";
import { connect } from "mongoose";
export const dbConfig = async () => {
  const url =
    "mongodb+srv://ebifegha123:ebifegha123@gomenticode.1l9lbmv.mongodb.net/rashdb?retryWrites=true&w=majority&appName=GomentiCode";
  await connect(url).then(() => {
    log("Server Up");
  });
};
