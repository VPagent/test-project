"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Container_1 = __importDefault(require("../../components/Container/Container"));
const NotesForm_1 = __importDefault(require("../../components/NotesForm/NotesForm"));
const NotesList_1 = __importDefault(require("../../components/NotesList/NotesList"));
const nanoid_1 = require("nanoid");
const notesPage_module_scss_1 = __importDefault(require("./notesPage.module.scss"));
const react_toastify_1 = require("react-toastify");
const NotesPage = () => {
    const [notes, setNotes] = (0, react_1.useState)([]);
    console.log(notes);
    const parse = JSON.parse(localStorage.getItem("notes"));
    (0, react_1.useEffect)(() => {
        if ((parse === null || parse === void 0 ? void 0 : parse.length) > 0) {
            setNotes(parse);
        }
    }, []);
    (0, react_1.useEffect)(() => {
        if (notes.length > 0) {
            localStorage.setItem("notes", JSON.stringify(notes));
        }
    }, [notes]);
    const handleSubmit = (values) => {
        const { name } = values;
        const inspect = notes.some(elem => elem.name === name);
        if (inspect) {
            react_toastify_1.toast.warning('there is already a note with the same name');
            return;
        }
        const obj = Object.assign(Object.assign({}, values), { done: false, id: (0, nanoid_1.nanoid)(2) });
        setNotes(prev => [...prev, obj]);
    };
    const handleCompleted = (notes, name) => {
        const currentArr = notes.map((elem) => {
            if (elem.name === name) {
                elem.done = !elem.done;
            }
            return elem;
        });
        setNotes(currentArr);
    };
    const handleDelete = (notes, id) => {
        const deletedNotes = notes.filter((elem) => elem.id !== id);
        setNotes(deletedNotes);
    };
    return (<section className="section">
            <Container_1.default>
                <div>
                    <h1 className={notesPage_module_scss_1.default.title}>Welcome to Notes page</h1>
                    <p className={notesPage_module_scss_1.default.text}>In this page you can add your notes, there are save in localStorage, you dont using backend</p>
                </div>
                <div>
                    <NotesForm_1.default onFormSubmit={handleSubmit}/>
                </div>
                <div>
                    <NotesList_1.default notes={notes} onInputChange={handleCompleted} onDelete={handleDelete}/>
                </div>
            </Container_1.default>
        </section>);
};
exports.default = NotesPage;
