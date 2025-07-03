const login = require("facebook-chat-api");
const fs = require("fs");

// === CONFIG ===
const threadID = "1234567890123456"; // Replace with group or user thread ID
const messageToSend = "Hello from Termux Bot!";
const delayInSeconds = 5;
// ==============

login({ appState: JSON.parse(fs.readFileSync("appstate.json", "utf8")) }, (err, api) => {
  if (err) return console.error("❌ Login error:", err);

  console.log(`✅ Logged in. Sending message in ${delayInSeconds} seconds...`);

  setTimeout(() => {
    api.sendMessage(messageToSend, threadID, (err) => {
      if (err) return console.error("❌ Message failed:", err);
      console.log("✅ Message sent!");
    });
  }, delayInSeconds * 1000);
});
