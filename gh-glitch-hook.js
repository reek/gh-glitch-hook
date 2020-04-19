const cmd = require("node-cmd");
const crypto = require("crypto");

module.exports = function ghGlitchHook(options = {}) {
  const opts = Object.assign({ PATH: "/hook", SECRET: "" }, options);

  const cmds = [
    "git fetch origin master",
    "git reset --hard origin/master",
    "git pull origin master --force",
    "refresh",
  ];

  return function (req, res, next) {
    if (
      req.method === "POST" &&
      req.url === opts.PATH &&
      req.headers["x-github-event"] === "push"
    ) {
      const hmac = crypto.createHmac("sha1", opts.SECRET);
      const payload = JSON.stringify(req.body);
      const signature = "sha1=" + hmac.update(payload).digest("hex");

      if (req.headers["x-hub-signature"] !== signature) {
        return res.send("Github signature not match!");
      }
      cmd.run(cmds.join(" && ")); // execute commands
      return res.send("GitHub webhook received!");
    }
    next();
  };
};
