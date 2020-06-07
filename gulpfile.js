const { src, dest } = require("gulp");
const { series } = require("gulp");
var del = require("del");
const webpack = require("webpack-stream");

function copyClientHTML() {
    return src("src/client/*.html").pipe(dest("dist/client"));
}

function copyClientCSS() {
    return src("src/client/*.css").pipe(dest("dist/client/css"));
}

function processJS() {
    return src("src/client/js/app.js")
        .pipe(webpack(require("./webpack.config.js")))
        .pipe(dest("dist/client/js"));
}

function clean() {
    return del(["dist"]);
}

exports.processjs = processJS;
exports.clean = clean;
exports.default = series(clean, copyClientHTML, copyClientCSS, processJS);
