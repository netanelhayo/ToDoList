"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskList = void 0;
const task_1 = require("../task");
require("../../css/taskList.css");
function sortByTitle(a, b) {
    const textA = a.title;
    const textB = b.title;
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
}
const TaskList = (props) => {
    return React.createElement("div", { className: "taskList" },
        React.createElement("div", { className: "title" }, props.title),
        props.taskList.sort(sortByTitle).map((task) => {
            return React.createElement(task_1.Task, { key: task.id, task: task });
        }));
};
exports.TaskList = TaskList;
//# sourceMappingURL=taskList.js.map