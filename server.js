const express = require("express");
const bodyParser = require("body-parser");
const ghGlitchHook = require("./gh-glitch-hook");

const app = express();
app.use(bodyParser.json());
app.use(ghGlitchHook({ SECRET: process.env.GITHUB_WEBHOOK_SECRET }));

app.get("*", (req, res) => {
  res.send("Welcome to GH Glitch Hook Project!");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
