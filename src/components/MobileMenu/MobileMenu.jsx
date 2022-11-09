"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_dom_1 = require("react-dom");
const GuestMenu_1 = __importDefault(require("../GuestMenu/GuestMenu"));
const mobileMenu_module_scss_1 = __importDefault(require("./mobileMenu.module.scss"));
const cg_1 = require("react-icons/cg");
const react_1 = __importDefault(require("react"));
const portal = document.getElementById("portal");
console.log(portal);
const MobileMenu = ({ onClose }) => {
    const hadnleClickToWrapper = (event) => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    };
    return (0, react_dom_1.createPortal)(<>
        <div className={mobileMenu_module_scss_1.default.menuWrapper} onClick={hadnleClickToWrapper}>
        </div>
        <menu className={mobileMenu_module_scss_1.default.menu}>
            <button type="button" onClick={() => onClose()} className={mobileMenu_module_scss_1.default.menu_button}><cg_1.CgClose size={20} color="#808080"/></button>
            <GuestMenu_1.default />
        </menu>
        </>, portal);
};
exports.default = MobileMenu;
