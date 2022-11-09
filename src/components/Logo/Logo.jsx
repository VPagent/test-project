"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logo_module_scss_1 = __importDefault(require("./logo.module.scss"));
const react_loader_spinner_1 = require("react-loader-spinner");
const Logo = () => {
    return (<div className={logo_module_scss_1.default.logo_box}>
            <react_loader_spinner_1.Triangle height="20" width="20" color="#000000"/>
            <p className={logo_module_scss_1.default.logo_text}>VPagent13</p>
        </div>);
};
exports.default = Logo;
