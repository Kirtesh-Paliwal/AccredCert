"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var React = require("react");
var client_1 = require("react-dom/client");
require("./index.css");
var App_1 = require("./App");
(0, client_1.createRoot)(document.getElementById('root')).render(React.createElement(react_1.StrictMode, null,
    React.createElement(App_1.default, null)));
