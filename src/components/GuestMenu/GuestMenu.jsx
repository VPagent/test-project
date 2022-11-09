"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const guestMenu_module_scss_1 = __importDefault(require("./guestMenu.module.scss"));
const GuestMenu = () => {
    return (<ul className={guestMenu_module_scss_1.default.guest_list}>
            <li className={guestMenu_module_scss_1.default.guest_list_item}><react_router_dom_1.NavLink className={guestMenu_module_scss_1.default.guest_list_link} end to={"/"}>Home</react_router_dom_1.NavLink></li>
            <li className={guestMenu_module_scss_1.default.guest_list_item}><react_router_dom_1.NavLink className={guestMenu_module_scss_1.default.guest_list_link} to={"/notes"}>Notes</react_router_dom_1.NavLink></li>
            <li className={guestMenu_module_scss_1.default.guest_list_item}><react_router_dom_1.NavLink className={guestMenu_module_scss_1.default.guest_list_link} to={"/login"}>Login</react_router_dom_1.NavLink></li>
        </ul>);
};
exports.default = GuestMenu;
