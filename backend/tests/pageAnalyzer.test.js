const axios = require("axios");
const analyzePage = require("../src/services/pageAnalyzer");

jest.mock("axios");

describe("Page Analyzer", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("should correctly parse HTML", async () => {

        axios.get.mockResolvedValue({

            status: 200,

            headers: {
                "content-type": "text/html"
            },

            data: `
                <html>

                <head>

                    <title>Test Website</title>

                    <meta
                        name="description"
                        content="Sample Description"
                    />

                </head>

                <body>

                    <h1>Heading One</h1>

                    <h1>Heading Two</h1>

                    <img src="a.jpg">

                    <img src="b.jpg" alt="Image"/>

                    <p>
                        Hello world from Page Pulse testing.
                    </p>

                </body>

                </html>
            `

        });

        const report = await analyzePage(
            "https://example.com"
        );

        expect(report.status).toBe(200);
        expect(report.title).toBe("Test Website");
        expect(report.metaDescription).toBe("Sample Description");
        expect(report.h1Count).toBe(2);
        expect(report.imagesMissingAlt).toBe(1);
        expect(report.wordCount).toBeGreaterThan(5);

    });

    test("should throw error for non HTML", async () => {

        axios.get.mockResolvedValue({

            status: 200,

            headers: {
                "content-type": "image/png"
            },

            data: ""

        });

        await expect(

            analyzePage("https://example.com")

        ).rejects.toThrow("NON_HTML");

    });

    test("should throw timeout error", async () => {

        const error = new Error("timeout");

        error.code = "ECONNABORTED";

        axios.get.mockRejectedValue(error);

        await expect(

            analyzePage("https://example.com")

        ).rejects.toHaveProperty("code", "ECONNABORTED");

    });

});