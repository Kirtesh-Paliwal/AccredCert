'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Map;
var card_1 = require("@/components/ui/card");
var lucide_react_1 = require("lucide-react");
var React = require("react");
var mapStyle = [
    {
        "elementType": "geometry",
        "stylers": [{ "saturation": -100 }]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#707070" }]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [{ "color": "#ffffff" }]
    }
];
function Map() {
    return (React.createElement("section", { id: "about", className: "relative w-full min-h-[600px] bg-gray-50" },
        React.createElement("div", { className: "container mx-auto px-4 py-16" },
            React.createElement("div", { className: "grid lg:grid-cols-2 gap-8 items-start" },
                React.createElement("div", { className: "space-y-8" },
                    React.createElement("div", null,
                        React.createElement("h2", { className: "text-3xl font-bold mb-4" }, "About Us"),
                        React.createElement("p", { className: "text-gray-600 leading-relaxed" }, "AccredCert is a trusted & US Govt. certified FDA agent specializing in global compliance solutions. We help businesses navigate complex regulations, ensuring your products meet FDA standards for U.S. market entry. Whether you're a manufacturer, distributor, or exporter, our expertise in product registration, labeling, and inspections ensures smooth compliance. With a focus on efficiency, we work closely with our clients to simplify regulatory processes, enabling them to expand internationally with confidence.")),
                    React.createElement("div", { className: "space-y-6" },
                        React.createElement("h3", { className: "text-xl font-semibold" }, "FAQs"),
                        React.createElement("div", { className: "grid gap-4" },
                            React.createElement(card_1.Card, null,
                                React.createElement(card_1.CardContent, { className: "p-6" },
                                    React.createElement("h4", { className: "font-semibold mb-2" }, "What is the role of an FDA agent, and why do I need one?"),
                                    React.createElement("p", { className: "text-sm text-gray-600" }, "An FDA agent acts as a liaison between the FDA and foreign companies, ensuring compliance with U.S. regulations and facilitating communication for exports."))),
                            React.createElement(card_1.Card, null,
                                React.createElement(card_1.CardContent, { className: "p-6" },
                                    React.createElement("h4", { className: "font-semibold mb-2" }, "How does AccredCert help with global compliance?"),
                                    React.createElement("p", { className: "text-sm text-gray-600" }, "AccredCert is a US FDA registered agent who helps companies through FDA regulations, product registration, labeling, and compliance to meet U.S. and global standards."))),
                            React.createElement(card_1.Card, null,
                                React.createElement(card_1.CardContent, { className: "p-6" },
                                    React.createElement("h4", { className: "font-semibold mb-2" }, "What industries does AccredCert provide FDA compliance services for?"),
                                    React.createElement("p", { className: "text-sm text-gray-600" }, "AccredCert provides FDA compliance support across industries like pharmaceuticals, medical devices, food, cosmetics, and dietary supplements, helping manufacturers, distributors, and exporters meet U.S. market entry standards.")))))),
                React.createElement("div", { className: "relative h-[500px] lg:h-full min-h-[500px]" },
                    React.createElement(card_1.Card, { className: "absolute left-4 top-4 z-10 w-72" },
                        React.createElement(card_1.CardHeader, null,
                            React.createElement(card_1.CardTitle, { className: "text-lg" }, "Our Location")),
                        React.createElement(card_1.CardContent, { className: "space-y-4" },
                            React.createElement("div", { className: "flex items-start space-x-3" },
                                React.createElement(lucide_react_1.MapPin, { className: "w-5 h-5 text-gray-500 mt-1" }),
                                React.createElement("p", { className: "text-sm text-gray-600" },
                                    "2105 Vista Oeste St NW,",
                                    React.createElement("br", null),
                                    "Suite E - 1080",
                                    React.createElement("br", null),
                                    "Albuquerque, NM 87120")),
                            React.createElement("div", { className: "flex items-center space-x-3" },
                                React.createElement(lucide_react_1.Phone, { className: "w-5 h-5 text-gray-500" }),
                                React.createElement("p", { className: "text-sm text-gray-600" }, "+1 (646) 974-6735")),
                            React.createElement("div", { className: "flex items-center space-x-3" },
                                React.createElement(lucide_react_1.Mail, { className: "w-5 h-5 text-gray-500" }),
                                React.createElement("p", { className: "text-sm text-gray-600" }, "info@accredcert.com")))),
                    React.createElement("div", { className: "absolute inset-0 w-full h-full rounded-lg overflow-hidden" },
                        React.createElement("iframe", { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.9432071848264!2d-106.7302236!3d35.108129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87226d5dcc6ccf2d%3A0x4fc40e2c49558846!2s2105%20Vista%20Oeste%20NW%20%231080%2C%20Albuquerque%2C%20NM%2087120%2C%20USA!5e0!3m2!1sen!2sin!4v1739423284853!5m2!1sen!2sin", width: "100%", height: "100%", style: { border: 0, filter: 'grayscale(1) contrast(1.2)' }, allowFullScreen: true, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", title: "Office Location Map" })))))));
}
