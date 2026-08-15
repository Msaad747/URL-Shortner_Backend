import serverless from "serverless-http";
import app from "../../index.js";
import sequelize from "../../db.js";

const dbReady = sequelize.authenticate()
    .then(() => sequelize.sync());

const serverlessApp = serverless(app);

export const handler = async (event, context) => {
    await dbReady;

    return serverlessApp(event, context);
};