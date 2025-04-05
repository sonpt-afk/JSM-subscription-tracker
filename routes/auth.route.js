import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up", (req, res) => {
  res.send({
    title: "Sign up",
    message: "Sign up successful",
  });
});
authRouter.post("/sign-in", (req, res) => {
  res.send({
    title: "Sign up",
    message: "Sign up successful",
  });
});
authRouter.post("/sign-out", (req, res) => {
  res.send({
    title: "Sign up",
    message: "Sign up successful",
  });
});

export default authRouter;
