"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("antd/dist/antd.css");
const antd_1 = require("antd");
const notesForm_module_scss_1 = __importDefault(require("./notesForm.module.scss"));
const react_1 = __importDefault(require("react"));
const NotesForm = ({ onFormSubmit }) => {
    return (<antd_1.Form action="" className={notesForm_module_scss_1.default.form} onFinish={(values) => onFormSubmit(values)}>
            <h2>Add Note<br /></h2>
            
            <antd_1.Form.Item label="Note name" name="name" rules={[{ required: true, message: 'Please enter note name' }]}>
                <antd_1.Input />
            </antd_1.Form.Item>
            <antd_1.Form.Item label="Note text" name="text" rules={[{ required: true, message: 'Please enter note text' }]}>
                <antd_1.Input />
            </antd_1.Form.Item>
            <antd_1.Button type="primary" htmlType="submit"> Submit </antd_1.Button>
        </antd_1.Form>);
};
exports.default = NotesForm;
