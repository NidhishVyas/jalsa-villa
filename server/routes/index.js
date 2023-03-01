const userRouter = require("./user");
const adminRouter = require("./admin");

const initRoutes = (app) => {
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/admin", adminRouter);
};

module.exports = initRoutes;