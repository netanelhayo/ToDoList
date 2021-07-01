"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const icons_1 = require("@ant-design/icons");
const antd_1 = require("antd");
const react_1 = require("react");
require("antd/dist/antd.css");
require("../../css/bottomNav.css");
const Filter = (props) => {
    const [isFilterVisible, setIsFilterVisible] = react_1.useState(false);
    const [userFilter, setUserFilter] = react_1.useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setUserFilter(e.target.value);
    };
    const showFilter = () => {
        setIsFilterVisible(true);
    };
    const handleOk = () => {
        setIsFilterVisible(false);
        props.setFilter(userFilter);
    };
    const handleCancel = () => {
        setIsFilterVisible(false);
        setUserFilter("");
    };
    return jsx_runtime_1.jsxs("div", Object.assign({ className: "filter" }, { children: [jsx_runtime_1.jsx(antd_1.Tooltip, Object.assign({ title: "filter" }, { children: jsx_runtime_1.jsx(antd_1.Button, { type: "primary", onClick: showFilter, icon: jsx_runtime_1.jsx(icons_1.FilterOutlined, {}, void 0) }, void 0) }), void 0), jsx_runtime_1.jsxs(antd_1.Modal, Object.assign({ title: "Filter tasks by user", visible: isFilterVisible, onOk: handleOk, onCancel: handleCancel }, { children: ["Enter user name to filter by:", jsx_runtime_1.jsx("input", { className: "filterInput", onChange: handleChange, value: userFilter }, void 0)] }), void 0)] }), void 0);
};
exports.Filter = Filter;
