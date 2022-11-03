import express from "express";

let router = express.Rputer();

router.get("/", (req, res) => {
  res.status(200).send("hello from todo app");
});
