const express = require("express");
const cors = require("cors");

const auditRoutes = require("./routes/auditRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "🚀 Page Pulse API Running"
    });
});

app.use("/api/audit", auditRoutes);

module.exports = app;