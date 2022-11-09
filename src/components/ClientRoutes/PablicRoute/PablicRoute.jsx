"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const PablickRoute = () => {
    const token = true;
    return token ? <react_router_dom_1.Outlet /> : <react_router_dom_1.Navigate to="/login"/>;
};
exports.default = PablickRoute;
