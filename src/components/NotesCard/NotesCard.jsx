"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notesCard_module_scss_1 = __importDefault(require("./notesCard.module.scss"));
const antd_1 = require("antd");
const bs_1 = require("react-icons/bs");
const md_1 = require("react-icons/md");
const NotesCard = ({ elem, notes, onInputChange, onDelete }) => {
    const { name, text, done, id } = elem;
    return (<li key={name} className={notesCard_module_scss_1.default.item}>
            <div className={notesCard_module_scss_1.default.headerCard}>
                <h3>{name}</h3>
                <div>{done && <p><bs_1.BsFillCheckCircleFill color='green'/></p>}</div>
            </div>
            <p className={notesCard_module_scss_1.default.text}>{text}</p>
            <div className={notesCard_module_scss_1.default.footerCard}>
                <antd_1.Switch checked={done} onChange={() => onInputChange(notes, name)}/>
                <button type="button" onClick={() => onDelete(notes, id)} className={notesCard_module_scss_1.default.button}><md_1.MdDelete color='grey' size={25}/></button>
            </div>
        </li>);
};
exports.default = NotesCard;
