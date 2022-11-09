"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Container_1 = __importDefault(require("../Container/Container"));
const header_module_scss_1 = __importDefault(require("../Header/header.module.scss"));
const Logo_1 = __importDefault(require("../Logo/Logo"));
const fi_1 = require("react-icons/fi");
const react_1 = require("react");
const MobileMenu_1 = __importDefault(require("../MobileMenu/MobileMenu"));
const Header = () => {
    const [isModalOpen, setIsModalOpen] = (0, react_1.useState)(false);
    const handleClickOpenMenu = () => {
        setIsModalOpen(prev => !prev);
    };
    return (<header className={header_module_scss_1.default.header}>
            <Container_1.default>
                <div className={header_module_scss_1.default.header_box}>
                <Logo_1.default />
                <button type="button" className={header_module_scss_1.default.header_box_button} onClick={handleClickOpenMenu}><fi_1.FiMenu size={20}/></button>
                {isModalOpen && <MobileMenu_1.default onClose={handleClickOpenMenu}/>}
                </div>
            </Container_1.default>
        </header>);
};
exports.default = Header;
