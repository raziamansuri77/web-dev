const express = require("express");
const app = express();
const userRouter = express.Router();
userRouter.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the user route",
  });
});
app.use("/user", userRouter);
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
