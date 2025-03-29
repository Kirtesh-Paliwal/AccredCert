"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
var Hero_1 = require("@/components/Hero");
var Navbar_1 = require("@/components/Navbar");
var Product_1 = require("@/components/Product");
var Contact_1 = require("@/components/Contact");
var React = require("react");
var Map_1 = require("@/components/Map");
var Footer_1 = require("@/components/Footer");
function Home() {
    return (React.createElement("div", null,
        React.createElement(Navbar_1.default, null),
        React.createElement(Hero_1.default, null),
        React.createElement(Product_1.default, null),
        React.createElement(Map_1.default, null),
        React.createElement(Contact_1.default, null),
        React.createElement(Footer_1.default, null)));
}
