const express = require("express");

const router = express.Router();

const {
    auditWebsite
} = require("../controllers/auditController");

// Temporary browser test
router.get("/", (req, res) => {
    res.json({
        message: "Audit endpoint is working. Use POST requests for auditing."
    });
});

router.post("/", auditWebsite);

module.exports = router;