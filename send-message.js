const login = require("facebook-chat-api");
const fs = require("fs");

// Read the saved session
const appState = JSON.parse(fs.readFileSync("appstate.json", "utf8"));

// Replace these with your target user/group ID and message
const targetUID = "9410555209045909"; // <-- PUT YOUR GROUP or USER UID HERE
const message = "Hello, this is an automated message!";
const delayInSeconds = 10; // <-- PUT YOUR DELAY IN SECONDS

// Login using appstate
login({ appState }, (err, api) => {
  if (err) return console.error("Login failed:", err);

  console.log(`⏳ Waiting for ${delayInSeconds} seconds before sending message...`);
  setTimeout(() => {
    api.sendMessage(message, targetUID, (err) => {
      if (err) return console.error("❌ Failed to send message:", err);
      console.log("✅ Message sent successfully!");
    });
  }, delayInSeconds * 1000);
});
