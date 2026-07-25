const axios = require("axios");
const cheerio = require("cheerio");

const REQUEST_TIMEOUT =
    Number(process.env.REQUEST_TIMEOUT) || 5000;

async function analyzePage(url) {
    const start = Date.now();

    const response = await axios.get(url, {
        timeout: REQUEST_TIMEOUT,
        maxRedirects: 5,
        headers: {
            "User-Agent":
                "Page Pulse Audit Tool/1.0",
            Accept: "text/html",
        },
        validateStatus: () => true,
    });

    const responseTime = Date.now() - start;

    const contentType = response.headers["content-type"] || "";

    if (!contentType.includes("text/html")) {
        throw new Error("NON_HTML");
    }

    const $ = cheerio.load(response.data);

    const title = $("title").text().trim();

    const metaDescription =
        $('meta[name="description"]').attr("content")?.trim() || "";

    const h1Count = $("h1").length;

    const imagesMissingAlt = $("img")
        .filter((_, img) => {
            const alt = $(img).attr("alt");
            return !alt || alt.trim() === "";
        })
        .length;

    const bodyText = $("body")
        .text()
        .replace(/\s+/g, " ")
        .trim();

    const wordCount = bodyText
        ? bodyText.split(" ").length
        : 0;

    return {
        status: response.status,
        responseTime,
        title,
        metaDescription,
        h1Count,
        imagesMissingAlt,
        wordCount,
    };
}

module.exports = analyzePage;