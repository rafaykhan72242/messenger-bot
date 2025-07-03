const login = require("facebook-chat-api");
const fs = require("fs");

login({ email: "YOUR_EMAIL", password: "YOUR_PASSWORD" }, (err, api) => {
  if (err) return console.error("Login failed:", err);

  fs.writeFileSync("appstate.json", JSON.stringify(api.getAppState()));
  console.log("✅ appstate.json saved.");
});
