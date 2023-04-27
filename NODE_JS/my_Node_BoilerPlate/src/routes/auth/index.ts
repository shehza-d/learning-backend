import express from "express";

const router = express.Router();

router.post("/login", async (req, res) => {});

router.post("/signup", async (req, res) => {});

router.post("/logout", async (req, res) => {
  res.clearCookie("Token", {
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });
  res.send({ message: "Logout successful" });
});

router.post("/forget-password", async (req, res) => {});

export default router