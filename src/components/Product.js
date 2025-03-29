"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Product;
var card_1 = require("@/components/ui/card");
var React = require("react");
var products = [
    {
        title: "US FDA Registration For Food, Beverages and Suppliments",
        image: "FDA food.png",
        price: 199.00,
    },
    {
        title: "US FDA Registration For Cosmetics (MoCRA)",
        image: "Mocra.png",
        price: 399.00,
    },
    {
        title: "FSVP Agent",
        image: "FSVp.png",
        price: 99.00,
    },
    {
        title: "US FDA Product Label Review",
        image: "LABEL.png",
        price: 49.00,
    },
    {
        title: "US FDA Prior Notice",
        image: "Prior.png",
        price: 49.00,
    },
    {
        title: "US LLC Registration",
        image: "LLC.png",
        price: 399.00,
    },
    {
        title: "EIN Registration",
        image: "EIN.jpeg",
        price: 99.00,
    },
    {
        title: "Registered Agent For LLC",
        image: "Agent.png",
        price: 99.00,
    },
];
function Product() {
    return (React.createElement("section", { id: "services", className: "py-16 px-4 bg-gray-50" },
        React.createElement("div", { className: "container mx-auto" },
            React.createElement("h2", { className: "text-3xl font-bold text-center mb-12" },
                React.createElement("u", null, "SERVICES")),
            React.createElement("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8" }, products.map(function (product, index) { return (React.createElement(card_1.Card, { key: index, className: "overflow-hidden" },
                React.createElement("img", { src: product.image, alt: product.title, className: "w-full h-auto object-cover" }),
                React.createElement(card_1.CardContent, { className: "p-4" },
                    React.createElement("h3", { className: "font-bold text-lg leading-tight mb-2" }, product.title),
                    React.createElement("p", { className: "text-xl font-semibold text-blue-600" },
                        "$",
                        product.price.toFixed(2))))); })))));
}
