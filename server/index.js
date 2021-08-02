require("dotenv").config();
const express = require("express");
const routers = require("./src/routes");
const cors = require("cors");

const app = express();

const port = process.env.PORT_SERVER;

app.use(express.json());
app.use(cors());
app.use("/api/v1", routers);
app.use("/uploads", express.static("uploads"));

app.listen(port, () => console.log(`Running on port ${port}`));
