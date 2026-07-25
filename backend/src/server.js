require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 5000;

// Only start the server if this file is run directly
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
}

module.exports = app;