import serverless from "serverless-http";
import app from "../../index.js";
import sequelize from "../../db.js";

await sequelize.authenticate();
await sequelize.sync();

export const handler = serverless(app);