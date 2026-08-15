import app from "./index.js";
import sequelize from "./db.js";

const PORT = process.env.PORT || 5000;

try {
  await sequelize.authenticate();

  console.log("Connected to Neon PostgreSQL");
    await sequelize.sync();
    console.log("Database synced");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} catch (error) {
  console.error("Error starting the server:", error);
}