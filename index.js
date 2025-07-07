const login = require("facebook-chat-api");
const fs = require("fs");

// 🔐 Your group info (hardcoded)
const GROUP_UID = "9410555209045909";
const LOCKED_GROUP_NAME = "rafays army";

// 🔑 Load appstate.json for login
const appState = JSON.parse(fs.readFileSync("appstate.json", "utf8"));

login({ appState }, (err, api) => {
  if (err) return console.error("❌ Login failed:", err);

  console.log("✅ Logged in successfully.");
  console.log(`🔁 Monitoring group ID: ${GROUP_UID}`);
  console.log(`🔐 Locked group name: "${LOCKED_GROUP_NAME}"`);

  api.setOptions({ listenEvents: true });

  api.listenMqtt((err, event) => {
    if (err) return console.error("❌ Error listening to events:", err);

    // Only react to name changes in the locked group
    if (
      event.type === "event" &&
      event.logMessageType === "log:thread-name" &&
      event.threadID === GROUP_UID
    ) {
      const newName = event.logMessageData.name;

      if (newName !== LOCKED_GROUP_NAME) {
        console.log(`⚠️ Group name changed to "${newName}". Reverting...`);
        api.setTitle(LOCKED_GROUP_NAME, GROUP_UID, (err) => {
          if (err) return console.error("❌ Failed to revert group name:", err);
          console.log(`🔒 Group name locked back to "${LOCKED_GROUP_NAME}"`);
        });
      }
    }
  });
});
