const express = require("express"); // framework on top of node
const path = require("path");
const serveStatic = require("serve-static");
const app = express();
const port = 3000;

app.use(serveStatic(path.resolve(__dirname, "../client/public")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/index.html"));
});

app.listen(port, () =>
    console.log(`Example app listening on port ${port}!!!!`)
);
