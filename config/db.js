const db = require("../models");

async function connectToDatabase() {
  try {
    await db.sequelize.authenticate();
    console.log("Database connected successfully.");

    await db.sequelize.sync({ alter: true });
    console.log("Database synchronized successfully.");

  } catch (err) {
    console.error("database connection failed:", err.message);
    process.exit(1);
   }
}

module.exports = connectToDatabase;