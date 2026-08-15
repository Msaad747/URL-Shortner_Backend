import express from "express";
import sequelize from "./db.js";
import cors from "cors";

import url_shortner from "./routes/urlshortner.js";
import Url from "./Model/Url.js";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

app.use("/",url_shortner);


try {
  sequelize.sync().then(() => {
    console.log("Database synchronized");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });
} catch (error) {
  console.error("Error starting the server:", error);
}
