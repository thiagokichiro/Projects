import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "VAI CORINTHIANS" });
});

app.listen(3333);
