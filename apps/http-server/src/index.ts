import express from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to http server");
});

app.post("/signup", (req, res) => {
  const { username, email, password } = req.body;
  res.send(`signup success ${username} ${email} ${password}`);
});

app.post("/signin", (req, res) => {
  const { email, password } = req.body;
  res.send(`signin success ${email} ${password}`);
});

app.post("/createroom", (req, res) => {
  res.send(`roomid is ${uuidv4()}`);
});

app.post("/joinroom", (req, res) => {
  const { roomid } = req.body;
  res.send(`joined room ${roomid}`);
});

app.listen(5050);
