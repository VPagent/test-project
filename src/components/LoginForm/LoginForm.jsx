"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const antd_1 = require("antd");
const react_router_dom_1 = require("react-router-dom");
const loginForm_module_scss_1 = __importDefault(require("./loginForm.module.scss"));
const LoginForm = () => {
    return (<antd_1.Form className={loginForm_module_scss_1.default.form}>
            <antd_1.Form.Item className={loginForm_module_scss_1.default.label} label="Email" name="Email" rules={[{ required: true, message: 'Please input your Email!' }]}>
                <antd_1.Input />
            </antd_1.Form.Item>

            <antd_1.Form.Item className={loginForm_module_scss_1.default.label} label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <antd_1.Input.Password />
            </antd_1.Form.Item>
            <div className={loginForm_module_scss_1.default.formFooter}>
            <react_router_dom_1.Link to="/register">You are not registered?</react_router_dom_1.Link>
            <antd_1.Button type='primary'>Login</antd_1.Button>
            </div>
        </antd_1.Form>);
};
exports.default = LoginForm;
