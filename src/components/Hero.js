'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Hero;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var button_1 = require("@/components/ui/button");
var card_1 = require("@/components/ui/card");
var React = require("react");
var images = [
    // {
    //   url: 'https://images.pexels.com/photos/7470817/pexels-photo-7470817.jpeg',
    //   title: 'US FDA Registration For Dietary Suppliments',
    //   description: 'Questions about medical device registrations, which are needed to export from an overseas market to the US & to import & sell devices in the US.',
    //   cta: 'Learn More'
    // },
    {
        url: 'https://images.pexels.com/photos/2386152/pexels-photo-2386152.jpeg',
        title: 'Food Facility Registration',
        // description: 'Ensure your medical devices meet FDA quality system requirements and international standards.',
        cta: 'Reach Us'
    },
    {
        url: 'https://images.pexels.com/photos/3735654/pexels-photo-3735654.jpeg',
        title: 'Cosmetic Facility Registration',
        // description: 'Develop comprehensive regulatory strategies for medical device approval and compliance.',
        cta: 'Reach Us'
    },
    {
        url: 'https://images.pexels.com/photos/7343177/pexels-photo-7343177.jpeg',
        title: 'Food Evaluation',
        // description: 'Expert guidance on clinical trials and evaluation requirements for medical devices.',
        cta: 'Reach Us'
    },
    // {
    //   url: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg',
    //   title: 'Post-Market Surveillance',
    //   description: 'Maintain compliance with post-market surveillance requirements and safety monitoring using ai and stuff.',
    //   cta: 'Discover More'
    // },
    {
        url: 'https://images.pexels.com/photos/1098515/pexels-photo-1098515.jpeg',
        title: 'International Compliance',
        // description: 'Navigate international medical device regulations and registration processes.',
        cta: 'Reach Us'
    }
];
function Hero() {
    var _a = (0, react_1.useState)(0), currentIndex = _a[0], setCurrentIndex = _a[1];
    var nextSlide = function () {
        setCurrentIndex(function (prevIndex) { return (prevIndex + 1) % images.length; });
    };
    var prevSlide = function () {
        setCurrentIndex(function (prevIndex) { return (prevIndex - 1 + images.length) % images.length; });
    };
    var goToSlide = function (index) {
        setCurrentIndex(index);
    };
    return (React.createElement("div", { id: 'home', className: "pt-20 bg-gray-50" },
        React.createElement("div", { className: "relative overflow-hidden" },
            React.createElement("h1", { className: "text-6xl md:p-0 p-2 md:text-center mx-auto mt-12 max-w-max" }, "Simplifying Global Compliance."),
            React.createElement("div", { className: "container mx-auto px-4 py-12" },
                React.createElement(card_1.Card, { className: "border-none shadow-none bg-transparent" },
                    React.createElement(card_1.CardContent, { className: "p-0" },
                        React.createElement("div", { className: "grid lg:grid-cols-2 gap-8 items-center" },
                            React.createElement("div", { className: "relative aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden" },
                                React.createElement("img", { src: images[currentIndex].url, alt: images[currentIndex].title, className: "object-cover w-full h-full transition-opacity duration-500" }),
                                React.createElement("div", { className: "absolute inset-0 flex items-center justify-between p-4" },
                                    React.createElement(button_1.Button, { variant: "ghost", size: "icon", className: "h-10 w-10 rounded-full bg-white/80 hover:bg-white", onClick: prevSlide },
                                        React.createElement(lucide_react_1.ChevronLeft, { className: "h-6 w-6" })),
                                    React.createElement(button_1.Button, { variant: "ghost", size: "icon", className: "h-10 w-10 rounded-full bg-white/80 hover:bg-white", onClick: nextSlide },
                                        React.createElement(lucide_react_1.ChevronRight, { className: "h-6 w-6" })))),
                            React.createElement("div", { className: "space-y-6" },
                                React.createElement("h1", { className: "text-4xl font-bold tracking-tight" }, images[currentIndex].title))),
                        React.createElement("div", { className: "flex justify-center gap-2 mt-8" }, images.map(function (_, index) { return (React.createElement("button", { key: index, onClick: function () { return goToSlide(index); }, className: "w-2 h-2 rounded-full transition-all duration-300 ".concat(currentIndex === index ? 'bg-neutral-900 w-4' : 'bg-gray-300'), "aria-label": "Go to slide ".concat(index + 1) })); }))))))));
}
