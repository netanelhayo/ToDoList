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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainScreen = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const taskList_1 = require("../taskList");
const react_2 = require("react");
require("../../css/mainScreen.css");
const tasks_1 = require("../../services/tasks");
const defaultTask = {
    id: "-1",
    title: "no tasks",
    description: "add tasks",
    completed: true,
    assignTo: "everyone"
};
const MainScreen = (props) => {
    const [tasks, setTasks] = react_1.default.useState([defaultTask]);
    react_2.useEffect(() => {
        props.socket.on('UpdateTasks', () => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            setTasks((_a = yield tasks_1.TasksService.getAllTasks()) !== null && _a !== void 0 ? _a : []);
            console.log("updated tasks");
        }));
    }, [props.socket]);
    if (tasks[0] === defaultTask) {
        return jsx_runtime_1.jsx("div", { children: "loading" }, void 0);
    }
    return jsx_runtime_1.jsxs("div", Object.assign({ className: "mainScreen" }, { children: [jsx_runtime_1.jsx(taskList_1.TaskList, { className: "list", title: "All Tasks", taskList: props.userToFilterBy ?
                    tasks.filter(t => t.assignTo === props.userToFilterBy).sort() :
                    tasks.sort() }, void 0), jsx_runtime_1.jsx(taskList_1.TaskList, { className: "list", title: "Done", taskList: props.userToFilterBy ?
                    tasks === null || tasks === void 0 ? void 0 : tasks.filter(t => t.completed && t.assignTo === props.userToFilterBy).sort() :
                    tasks === null || tasks === void 0 ? void 0 : tasks.filter(t => t.completed).sort() }, void 0), jsx_runtime_1.jsx(taskList_1.TaskList, { className: "list", title: "To Do", taskList: props.userToFilterBy ?
                    tasks === null || tasks === void 0 ? void 0 : tasks.filter(t => !t.completed && t.assignTo === props.userToFilterBy).sort() :
                    tasks === null || tasks === void 0 ? void 0 : tasks.filter(t => !t.completed).sort() }, void 0)] }), void 0);
};
exports.MainScreen = MainScreen;
