"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Container_1 = __importDefault(require("../../components/Container/Container"));
const LoginForm_1 = __importDefault(require("../../components/LoginForm/LoginForm"));
const LoginPage = () => {
    return (<section className="section">
            <Container_1.default>
                <LoginForm_1.default />
            </Container_1.default>
        </section>);
};
exports.default = LoginPage;
