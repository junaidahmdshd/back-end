const express = require('express');
const app = express();

app.get("/", (req, res) => {
    return res.send({
        msg: "Hello from back-end api application"
    });
});

app.listen(5000, () => {
    console.log("Server start listening on PORT 5000");
});
