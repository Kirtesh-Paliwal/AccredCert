'use client';
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Footer;
var React = require("react");
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var button_1 = require("@/components/ui/button");
var use_toast_1 = require("@/hooks/use-toast");
function Footer() {
    var _this = this;
    var _a = (0, react_1.useState)(""), email = _a[0], setEmail = _a[1];
    var _b = (0, react_1.useState)(false), showForm = _b[0], setShowForm = _b[1];
    var handleSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var emailRegex, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
                    if (!emailRegex.test(email)) {
                        (0, use_toast_1.toast)({
                            title: "Invalid email",
                            description: "Please enter a valid email address.",
                            variant: "destructive",
                        });
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    // Simulate API call
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                case 2:
                    // Simulate API call
                    _a.sent();
                    (0, use_toast_1.toast)({
                        title: "Success!",
                        description: "Thank you for subscribing to our newsletter.",
                    });
                    setEmail("");
                    setShowForm(false);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    (0, use_toast_1.toast)({
                        title: "Error",
                        description: "Something went wrong. Please try again later.",
                        variant: "destructive",
                    });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("footer", { className: "relative overflow-hidden bg-black" },
        React.createElement("div", { className: "container relative mx-auto px-4 pt-6" },
            React.createElement("div", { className: "grid gap-12 md:grid-cols-3" },
                React.createElement("div", { className: "space-y-6" },
                    React.createElement("img", { src: "/logo.png", alt: "Logo", className: "h-20 w-20" }),
                    React.createElement("h3", { className: "text-3xl font-bold text-white" }, "The Compliance Consultant for better clients\u00AE")),
                React.createElement("div", { className: "space-y-6 text-gray-300" },
                    React.createElement("h4", { className: "text-lg font-semibold text-white" }, "USA Office"),
                    React.createElement("div", { className: "space-y-4" },
                        React.createElement("div", { className: "flex items-start space-x-3" },
                            React.createElement(lucide_react_1.Mail, { className: "h-5 w-5 shrink-0" }),
                            React.createElement("p", { className: "text-sm" }, "info@accredcert.com")),
                        React.createElement("div", { className: "flex items-start space-x-3" },
                            React.createElement(lucide_react_1.Phone, { className: "h-5 w-5 shrink-0" }),
                            React.createElement("p", { className: "text-sm" }, "+1 (646) 974-6735")),
                        React.createElement("div", { className: "flex items-start space-x-3" },
                            React.createElement(lucide_react_1.MapPin, { className: "h-5 w-5 shrink-0" }),
                            React.createElement("div", { className: "text-sm" },
                                React.createElement("p", null, "2105 Vista Oeste St NW, Suite E - 1080"),
                                React.createElement("p", null, "Albuquerque, NM 87120")))),
                    React.createElement(button_1.Button, { variant: "link", className: "group px-0 text-white hover:text-yellow-400", asChild: true },
                        React.createElement("a", { href: "#map" },
                            "SEE ON MAP",
                            React.createElement(lucide_react_1.ArrowRight, { className: "ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" })))),
                React.createElement("div", { className: "space-y-6 text-gray-300" },
                    React.createElement("h4", { className: "text-lg font-semibold text-white" }, "India Office"),
                    React.createElement("div", { className: "space-y-4" },
                        React.createElement("div", { className: "flex items-start space-x-3" },
                            React.createElement(lucide_react_1.Mail, { className: "h-5 w-5 shrink-0" }),
                            React.createElement("p", { className: "text-sm" }, "info@accredcert.com")),
                        React.createElement("div", { className: "flex items-start space-x-3" },
                            React.createElement(lucide_react_1.Phone, { className: "h-5 w-5 shrink-0" }),
                            React.createElement("p", { className: "text-sm" }, "+91 83026 45259")),
                        React.createElement("div", { className: "flex items-start space-x-3" },
                            React.createElement(lucide_react_1.MapPin, { className: "h-5 w-5 shrink-0" }),
                            React.createElement("div", { className: "text-sm" },
                                React.createElement("p", null, "Bahubali Colony, near Bohra Ganesh Temple"),
                                React.createElement("p", null, "Udaipur, Rajasthan 313001")))),
                    React.createElement(button_1.Button, { variant: "link", className: "group px-0 text-white hover:text-yellow-400", asChild: true },
                        React.createElement("a", { href: "https://maps.app.goo.gl/KGkqbF3kDnQFLwjg8" },
                            "SEE ON MAP",
                            React.createElement(lucide_react_1.ArrowRight, { className: "ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" })))),
                React.createElement("div", { className: "space-y-6 text-gray-300" },
                    React.createElement("div", { className: "space-y-4" },
                        React.createElement("h4", { className: "text-lg font-semibold text-white" }, "FOLLOW US"),
                        React.createElement("div", { className: "flex space-x-6" },
                            React.createElement("a", { href: "http://facebook.com/accredcert", className: "text-white transition-colors hover:text-yellow-400", target: "_blank", rel: "noopener noreferrer" },
                                React.createElement(lucide_react_1.Facebook, { className: "h-6 w-6" }),
                                React.createElement("span", { className: "sr-only" }, "Facebook")),
                            React.createElement("a", { href: "http://x.com/accredcert", className: "text-white transition-colors hover:text-yellow-400", target: "_blank", rel: "noopener noreferrer" },
                                React.createElement(lucide_react_1.Twitter, { className: "h-6 w-6" }),
                                React.createElement("span", { className: "sr-only" }, "Twitter")),
                            React.createElement("a", { href: "http://linkedin.com/company/accredcert", className: "text-white transition-colors hover:text-yellow-400", target: "_blank", rel: "noopener noreferrer" },
                                React.createElement(lucide_react_1.Linkedin, { className: "h-6 w-6" }),
                                React.createElement("span", { className: "sr-only" }, "Linkedin")),
                            React.createElement("a", { href: "https://www.instagram.com/accredcert/", className: "text-white transition-colors hover:text-yellow-400", target: "_blank", rel: "noopener noreferrer" },
                                React.createElement(lucide_react_1.InstagramIcon, { className: "h-6 w-6" }),
                                React.createElement("span", { className: "sr-only" }, "InstaGram")))))),
            React.createElement("div", { className: "mt-16 text-center text-sm text-gray-400" },
                React.createElement("p", null,
                    "\u00A9 ",
                    new Date().getFullYear(),
                    " AccredCert. All rights reserved.")))));
}
