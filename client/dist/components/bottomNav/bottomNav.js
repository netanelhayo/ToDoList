"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomNav = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const filter_1 = require("../filter");
const taskAdder_1 = require("../taskAdder");
require("../../css/bottomNav.css");
const BottomNav = (props) => {
    return jsx_runtime_1.jsxs("div", Object.assign({ className: "bottomNav" }, { children: [jsx_runtime_1.jsx(filter_1.Filter, { setFilter: props.setFilter }, void 0), jsx_runtime_1.jsx(taskAdder_1.TaskAdder, {}, void 0)] }), void 0);
};
exports.BottomNav = BottomNav;
