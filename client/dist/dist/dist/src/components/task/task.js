"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            }
        }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const core_1 = require("@material-ui/core");
const antd_1 = require("antd");
const react_1 = require("react");
require("../../css/task.css");
const tasks_1 = require("../../services/tasks");
const Task = (props) => {
    const [expanded, setExpanded] = react_1.default.useState(false);
    return react_1.default.createElement("div", { className: "task", style: { backgroundColor: props.task.completed ? "#A9A9A9" : "white" } }, react_1.default.createElement("div", { className: "taskContent" }, react_1.default.createElement("div", { className: "taskTitle", onClick: () => {
            tasks_1.TasksService.markAsDoneOrUndone(props.task.id);
        } }, props.task.title), react_1.default.createElement(antd_1.Button, { className: "expandButton", size: "small", type: "ghost", shape: "round", onClick: () => setExpanded(!expanded), "aria-expanded": expanded }, expanded ? "show less" : "show more"), react_1.default.createElement(core_1.Collapse, { in: expanded, timeout: "auto", unmountOnExit: true }, react_1.default.createElement("p", null, props.task.description))), react_1.default.createElement(antd_1.Button, { className: "xButton", size: "small", type: "default", shape: "circle", onClick: () => __awaiter(void 0, void 0, void 0, function* () {
            console.log(props.task.id);
            yield tasks_1.TasksService.deleteTaskById(props.task.id);
        }) }, "X"));
};
exports.Task = Task;
