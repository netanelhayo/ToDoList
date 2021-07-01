"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const antd_1 = require("antd");
const mainScreen_1 = require("./components/mainScreen");
const bottomNav_1 = require("./components/bottomNav");
require("./css/App.css");
require("antd/dist/antd.css");
const socket_io_client_1 = require("socket.io-client");
const ENDPOINT = "http://localhost:3001";
const { Header, Content, Footer } = antd_1.Layout;
function App() {
    const socket = socket_io_client_1.default(ENDPOINT);
    const [userToFilterBy, setUserToFilterBy] = react_1.default.useState("");
    return (react_1.default.createElement("div", { className: "App" }, react_1.default.createElement(antd_1.Layout, { className: "layout" }, react_1.default.createElement(Header, null, react_1.default.createElement(antd_1.Typography.Title, { style: { color: "#fff5ee" } }, "ToDo List")), react_1.default.createElement(Content, { className: "content" }, react_1.default.createElement(mainScreen_1.MainScreen, { socket: socket, userToFilterBy: userToFilterBy })), react_1.default.createElement(Footer, { className: "footer" }, react_1.default.createElement(bottomNav_1.BottomNav, { setFilter: setUserToFilterBy })))));
}
exports.default = App;
