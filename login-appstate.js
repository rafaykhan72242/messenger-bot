const login = require("@xaviabot/fca-unofficial");
const fs = require("fs");

const email = "thefeezy72242@gmail.com";
const password = "farazanees1234";

login({ email, password }, (err, api) => {
  if (err) return console.error("Login failed:", err);

  fs.writeFileSync("appstate.json", JSON.stringify(api.getAppState()));
  console.log("✅ Login successful! Saved as appstate.json");
});
