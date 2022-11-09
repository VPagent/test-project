"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notesList_module_scss_1 = __importDefault(require("./notesList.module.scss"));
const NotesCard_1 = __importDefault(require("../NotesCard/NotesCard"));
const NotesList = ({ notes, onInputChange, onDelete }) => {
    return (<ul className={notesList_module_scss_1.default.list}>
            {notes && notes.map((elem) => {
            return <NotesCard_1.default elem={elem} notes={notes} onInputChange={onInputChange} onDelete={onDelete}/>;
        })}
        </ul>);
};
exports.default = NotesList;
