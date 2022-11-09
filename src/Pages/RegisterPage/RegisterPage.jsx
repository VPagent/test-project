"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Container_1 = __importDefault(require("../../components/Container/Container"));
const RegisterForm_1 = __importDefault(require("../../components/RegisterForm/RegisterForm"));
const RegisterPage = () => {
    return (<section className='section'>
            <Container_1.default>
                <RegisterForm_1.default />
            </Container_1.default>
        </section>);
};
exports.default = RegisterPage;
