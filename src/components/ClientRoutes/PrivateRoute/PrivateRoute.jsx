"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const PrivateRoute = () => {
    const token = false;
    return token ? <react_router_dom_1.Navigate to="/"/> : <react_router_dom_1.Outlet />;
};
exports.default = PrivateRoute;
