const express = require("express");
const app = express();
require('dotenv').config();

const PORT = process.env.PORT;
// Mount the router middleware
const router  = require('./router');
app.use("/", router);

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}/`));