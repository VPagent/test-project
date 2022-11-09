"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const Header_1 = __importDefault(require("./components/Header/Header"));
const ClientRoutes_1 = __importDefault(require("./components/ClientRoutes/ClientRoutes"));
const react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
const App = () => {
    return (<>
        <Header_1.default />
        <ClientRoutes_1.default />
        <react_toastify_1.ToastContainer />
      </>);
};
exports.App = App;
