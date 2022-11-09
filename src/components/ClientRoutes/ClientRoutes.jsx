"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const HomePage_1 = __importDefault(require("../../Pages/HomePage/HomePage"));
const LoginPage_1 = __importDefault(require("../../Pages/LoginPage/LoginPage"));
const NotesPage_1 = __importDefault(require("../../Pages/NotesPage/NotesPage"));
const RegisterPage_1 = __importDefault(require("../../Pages/RegisterPage/RegisterPage"));
const PablicRoute_1 = __importDefault(require("./PablicRoute/PablicRoute"));
const ClientRoutes = () => {
    return (<react_router_dom_1.Routes>
            <react_router_dom_1.Route path="/" element={<HomePage_1.default />}/>
            <react_router_dom_1.Route path="/" element={<PablicRoute_1.default />}>
                <react_router_dom_1.Route path="/notes" element={<NotesPage_1.default />}/>
                <react_router_dom_1.Route path="/login" element={<LoginPage_1.default />}/>
                <react_router_dom_1.Route path="/register" element={<RegisterPage_1.default />}/>
            </react_router_dom_1.Route>
        </react_router_dom_1.Routes>);
};
exports.default = ClientRoutes;
