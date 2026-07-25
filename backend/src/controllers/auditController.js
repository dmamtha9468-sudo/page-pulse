const analyzePage = require("../services/pageAnalyzer");
const validateUrl = require("../utils/validateUrl");

async function auditWebsite(req, res) {
    try {
        const { url } = req.body;

        if (!url) {
            return res.status(400).json({
                success: false,
                error: "URL is required.",
            });
        }

        if (!validateUrl(url)) {
            return res.status(400).json({
                success: false,
                error: "Please enter a valid HTTP or HTTPS URL.",
            });
        }

        const report = await analyzePage(url);

        return res.status(200).json({
            success: true,
            message: "Audit completed successfully.",
            data: report,
        });
    } catch (err) {
        console.error("Audit Error:", err);

        if (err.message === "NON_HTML") {
            return res.status(400).json({
                success: false,
                error: "The URL does not point to an HTML page.",
            });
        }

        if (err.code === "ECONNABORTED") {
            return res.status(408).json({
                success: false,
                error: "The request timed out while fetching the page.",
            });
        }

        return res.status(500).json({
            success: false,
            error: "Failed to analyze the website.",
        });
    }
}

module.exports = {
    auditWebsite,
};