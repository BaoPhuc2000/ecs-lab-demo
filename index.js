const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({
    message: "Xin chao tu ECS Fargate!",
    message2: "Hello from ECS Fargete!",
    hostname: require("os").hostname(),
  });
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
