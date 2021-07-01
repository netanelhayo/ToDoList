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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const axios_1 = __importDefault(require("axios"));
const uuid_1 = require("uuid");
const config_1 = require("../config");
exports.TasksService = {
    getAllTasks: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log("before");
            const b = (yield axios_1.default.get(config_1.SERVER_URL + "/tasks")).data;
            console.log("after");
            return b;
        }
        catch (e) {
            console.log(e);
        }
        return undefined;
    }),
    deleteTaskById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        yield axios_1.default.delete(config_1.SERVER_URL + `/tasks/${id}`);
    }),
    addTask: (title, description, assignTo) => __awaiter(void 0, void 0, void 0, function* () {
        yield axios_1.default.post(config_1.SERVER_URL + "/tasks", {
            id: uuid_1.v1(),
            title: title,
            description: description,
            completed: false,
            assignTo: assignTo
        });
    }),
    markAsDoneOrUndone: (id) => __awaiter(void 0, void 0, void 0, function* () {
        yield axios_1.default.put(config_1.SERVER_URL + `/tasks/${id}`);
        console.log("Task toggled");
    })
};
//# sourceMappingURL=tasks.js.map