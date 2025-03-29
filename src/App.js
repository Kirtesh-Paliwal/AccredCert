"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./App.css");
var Home_1 = require("./pages/Home");
var React = require("react");
const App = () => {
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(react_1.Suspense, { fallback: React.createElement("div", { className: "flex justify-center items-center h-screen" },
                React.createElement("div", { className: "animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-400 border-opacity-75" })) },
            React.createElement(react_router_dom_1.Routes, null,
                React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(Home_1.default, null) })))));
};
export default App;