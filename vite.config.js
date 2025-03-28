import postcss from './postcss.config.cjs';
import { defineConfig } from "vite";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var plugin_react_1 = require("@vitejs/plugin-react");
var vite_1 = require("vite");
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_react_1.default)()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
