// require("dotenv").config();
import express from "express";
const app = express();
const port = process.env.PORT || 5000;
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Joke-1",
      Content: "This is joke",
    },
    {
      id: 2,
      title: "Joke-2",
      Content: "This is joke",
    },
    {
      id: 3,
      title: "Joke-3",
      Content: "This is joke",
    },
    {
      id: 4,
      title: "Joke-4",
      Content: "This is joke",
    },
    {
      id: 5,
      title: "Joke-5",
      Content: "This is joke",
    },
  ];
  res.send(jokes);
});
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
