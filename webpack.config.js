module.exports = {
    mode: "production",
    entry: "./src/client/js/app.js",
    output: {
        path: require("path").resolve("./src/bin/client/js"),
        library: "app",
        filename: "app.bundle.js",
    },
};
