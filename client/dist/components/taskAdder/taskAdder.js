"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskAdder = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const antd_1 = require("antd");
const react_1 = require("react");
const icons_1 = require("@ant-design/icons");
const tasks_1 = require("../../services/tasks");
require("../../css/bottomNav.css");
const TaskAdder = (props) => {
    const [isFilterVisible, setIsAdderVisible] = react_1.useState(false);
    const [title, setTitle] = react_1.useState("");
    const [description, setDescription] = react_1.useState("");
    const [assignTo, setAssignTo] = react_1.useState("");
    const showAdder = () => {
        setIsAdderVisible(true);
    };
    const handleOk = () => __awaiter(void 0, void 0, void 0, function* () {
        setIsAdderVisible(false);
        yield tasks_1.TasksService.addTask(title, description, assignTo);
        setTitle("");
        setDescription("");
        setAssignTo("");
    });
    const handleCancel = () => {
        setIsAdderVisible(false);
        setTitle("");
        setDescription("");
        setAssignTo("");
    };
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };
    const handleAssignToChange = (e) => {
        setAssignTo(e.target.value);
    };
    return jsx_runtime_1.jsxs("div", Object.assign({ className: "taskAdder" }, { children: [jsx_runtime_1.jsx(antd_1.Tooltip, Object.assign({ title: "Add Task" }, { children: jsx_runtime_1.jsx(antd_1.Button, { type: "primary", onClick: showAdder, icon: jsx_runtime_1.jsx(icons_1.PlusOutlined, {}, void 0) }, void 0) }), void 0), jsx_runtime_1.jsx(antd_1.Modal, Object.assign({ title: "Add New Task", visible: isFilterVisible, onOk: handleOk, onCancel: handleCancel }, { children: jsx_runtime_1.jsxs("form", Object.assign({ className: "addTaskForm" }, { children: ["Title:", jsx_runtime_1.jsx("input", { value: title, onChange: handleTitleChange }, void 0), "Description:", jsx_runtime_1.jsx("textarea", { value: description, onChange: handleDescriptionChange }, void 0), "Assign to:", jsx_runtime_1.jsx("input", { value: assignTo, onChange: handleAssignToChange }, void 0)] }), void 0) }), void 0)] }), void 0);
};
exports.TaskAdder = TaskAdder;
