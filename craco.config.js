const path = require("path");

module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src/"),
            "@assets": path.resolve(__dirname, "src/assets/"),
            "@styles": path.resolve(__dirname, "src/assets/styles/"),
            "@components": path.resolve(__dirname, "src/components/"),
            "@context": path.resolve(__dirname, "src/context/"),
            "@types": path.resolve(__dirname, "src/types/"),
            "@utils": path.resolve(__dirname, "src/utils/"),
        },
    },
};