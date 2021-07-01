"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const mainScreen_1 = require("./components/mainScreen");
const bottomNav_1 = require("./components/bottomNav");
require("./css/App.css");
require("antd/dist/antd.css");
const socket_io_client_1 = __importDefault(require("socket.io-client"));
const ENDPOINT = "http://localhost:3001";
const { Header, Content, Footer } = antd_1.Layout;
function App() {
    const socket = socket_io_client_1.default(ENDPOINT);
    const [userToFilterBy, setUserToFilterBy] = react_1.default.useState("");
    return (jsx_runtime_1.jsx("div", Object.assign({ className: "App" }, { children: jsx_runtime_1.jsxs(antd_1.Layout, Object.assign({ className: "layout" }, { children: [jsx_runtime_1.jsx(Header, { children: jsx_runtime_1.jsx(antd_1.Typography.Title, Object.assign({ style: { color: "#fff5ee" } }, { children: "ToDo List" }), void 0) }, void 0), jsx_runtime_1.jsx(Content, Object.assign({ className: "content" }, { children: jsx_runtime_1.jsx(mainScreen_1.MainScreen, { socket: socket, userToFilterBy: userToFilterBy }, void 0) }), void 0), jsx_runtime_1.jsx(Footer, Object.assign({ className: "footer" }, { children: jsx_runtime_1.jsx(bottomNav_1.BottomNav, { setFilter: setUserToFilterBy }, void 0) }), void 0)] }), void 0) }), void 0));
}
exports.default = App;
