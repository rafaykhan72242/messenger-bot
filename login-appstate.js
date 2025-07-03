const login = require("facebook-chat-api");
const fs = require("fs");

login({ email: "YOUR_EMAIL", password: "YOUR_PASSWORD" }, (err, api) => {
  if (err) return console.error("Login failed:", err);

  fs.writeFileSync("[
    {
        "key": "sb",
        "value": "dhymZ3k6iXgPhl0-gBpiYpRh",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2025-07-03T20:46:52.022Z",
        "lastAccessed": "2025-07-03T20:46:52.022Z"
    },
    {
        "key": "dpr",
        "value": "3.2983407974243164",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2025-07-03T20:46:52.022Z",
        "lastAccessed": "2025-07-03T20:46:52.022Z"
    },
    {
        "key": "ps_l",
        "value": "1",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2025-07-03T20:46:52.022Z",
        "lastAccessed": "2025-07-03T20:46:52.022Z"
    },
    {
        "key": "ps_n",
        "value": "1",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2025-07-03T20:46:52.022Z",
        "lastAccessed": "2025-07-03T20:46:52.022Z"
    },
    {
        "key": "datr",
        "value": "ZUtmaKerveh4zo0FHJ_WSTEh",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2025-07-03T20:46:52.022Z",
        "lastAccessed": "2025-07-03T20:46:52.022Z"
    },
    {
        "key": "c_user",
        "value": "61550531522689",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2025-07-03T20:46:52.022Z",
        "lastAccessed": "2025-07-03T20:46:52.022Z"
    },
    {
        "key": "wd",
        "value": "891x1758",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2025-07-03T20:46:52.022Z",
        "lastAccessed": "2025-07-03T20:46:52.022Z"
    },
    {
        "key": "fr",
        "value": "18iBYPQXGX0pCWL4A.AWdr6ykNWAEaxYBrxgxStJ4qQ5B3jCMzp78vruhOfR1JG0Gct2o.BoZuwo..AAA.0.0.BoZuwo.AWeOwJuhGLs7kRfdjJoH2aiiLLs",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2025-07-03T20:46:52.022Z",
        "lastAccessed": "2025-07-03T20:46:52.023Z"
    },
    {
        "key": "xs",
        "value": "36%3AVSjRVa71O5frkA%3A2%3A1751534448%3A-1%3A-1%3A%3AAcV07Bfwwu4JeN74tf_RiBmSvsK_Cvd9Zlm6mXncuw",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2025-07-03T20:46:52.023Z",
        "lastAccessed": "2025-07-03T20:46:52.023Z"
    },
    {
        "key": "presence",
        "value": "C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1751575593436%2C%22v%22%3A1%7D",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2025-07-03T20:46:52.023Z",
        "lastAccessed": "2025-07-03T20:46:52.023Z"
    }
]", JSON.stringify(api.getAppState()));
  console.log("✅ appstate.json saved.");
});
