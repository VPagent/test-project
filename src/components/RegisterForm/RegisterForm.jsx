"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const registerForm_module_scss_1 = __importDefault(require("./registerForm.module.scss"));
const antd_1 = require("antd");
const RegisterForm = () => {
    const handleSubmit = (values) => {
    };
    return (<antd_1.Form className={registerForm_module_scss_1.default.form} onFinish={(values) => handleSubmit(values)}>
            <antd_1.Form.Item className={registerForm_module_scss_1.default.label} label="Name" name="Name" rules={[{ required: true, message: 'Please input your Name' }]}>
                <antd_1.Input />
            </antd_1.Form.Item>
            <antd_1.Form.Item className={registerForm_module_scss_1.default.label} label="Email" name="Email" rules={[{ required: true, message: 'Please input your Email!' }]}>
                <antd_1.Input />
            </antd_1.Form.Item>

            <antd_1.Form.Item className={registerForm_module_scss_1.default.label} label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <antd_1.Input.Password />
            </antd_1.Form.Item>
            <div className={registerForm_module_scss_1.default.formFooter}>
            <antd_1.Button type='primary'>Register</antd_1.Button>
            </div>
        </antd_1.Form>);
};
exports.default = RegisterForm;
