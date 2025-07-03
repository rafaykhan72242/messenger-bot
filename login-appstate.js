const login = require("@xaviabot/fca-unofficial");
const fs = require("fs");

const email = "Email";
const password = "password";

login({ email, password }, (err, api) => {
  if (err) return console.error("Login failed:", err);

  fs.writeFileSync("appstate.json", JSON.stringify(api.getAppState()));
  console.log("✅ Login successful! Saved as appstate.json");
});
