"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Container_1 = __importDefault(require("../../components/Container/Container"));
const HomePage = () => {
    return (<section className="section">
            <Container_1.default>
                <div>
                    <h1>Welcome to HomePage</h1>
                </div>
            </Container_1.default>
        </section>);
};
exports.default = HomePage;
