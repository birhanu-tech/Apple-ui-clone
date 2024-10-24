const express = require("express");
const app = express();
const port = 3008;
const mysql = require('cors')





app.listen(port,() => {
    console.log(`server running on port ${port}`);
});