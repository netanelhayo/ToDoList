"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = void 0;
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
    return React.createElement("div", { className: "filter" }, React.createElement(antd_1.Tooltip, { title: "filter" }, React.createElement(antd_1.Button, { type: "primary", onClick: showFilter, icon: React.createElement(icons_1.FilterOutlined, null) })), React.createElement(antd_1.Modal, { title: "Filter tasks by user", visible: isFilterVisible, onOk: handleOk, onCancel: handleCancel }, "Enter user name to filter by:", React.createElement("input", { className: "filterInput", onChange: handleChange, value: userFilter })));
};
exports.Filter = Filter;
//# sourceMappingURL=filter.js.map