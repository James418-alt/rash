import { log } from "console";
import { connect } from "mongoose";
export const dbConfig = async () => {
  const url = "mongodb://localhost:27017/backdb";
  await connect(url).then(() => {
    log("Server Up");
  });
};
