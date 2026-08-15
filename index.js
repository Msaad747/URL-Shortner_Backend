import express from "express";
// import sequelize from "./db.js";
// import Url from "./Model/Url.js";
import cors from "cors";

import url_shortner from "./routes/urlshortner.js";

const app = express();
// const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

app.use("/",url_shortner);


// try {
//   await sequelize.authenticate();
//     console.log("Connected to Neon PostgreSQL");

//     app.listen(5000, () => {
//       console.log("Server running on port 5000");
//     });
// } catch (error) {
//   console.error("Error starting the server:", error);
// }

export default app;