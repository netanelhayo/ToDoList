"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const task_1 = require("../task");
require("../../css/taskList.css");
function sortByTitle(a, b) {
    const textA = a.title;
    const textB = b.title;
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
}
const TaskList = (props) => {
    return jsx_runtime_1.jsxs("div", Object.assign({ className: "taskList" }, { children: [jsx_runtime_1.jsx("div", Object.assign({ className: "title" }, { children: props.title }), void 0), props.taskList.sort(sortByTitle).map((task) => {
                return jsx_runtime_1.jsx(task_1.Task, { task: task }, task.id);
            })] }), void 0);
};
exports.TaskList = TaskList;
