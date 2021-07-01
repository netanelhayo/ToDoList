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
exports.MongoDb = void 0;
const taskModel_1 = __importDefault(require("./models/taskModel"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../../config");
class MongoDb {
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield mongoose_1.default.connect("mongodb://" + config_1.MongoConfig.host + "/todo", config_1.MongoConfig.options);
                console.log("connected to mongo");
            }
            catch (e) {
                console.log("Mongo connection faild: " + e);
            }
            mongoose_1.default.connection.on('error', console.error.bind(console, 'mongo error:'));
        });
    }
    getAllTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield taskModel_1.default.find().exec();
        });
    }
    addTask(task) {
        const taskToAdd = new taskModel_1.default({
            id: task.id,
            title: task.title,
            description: task.description,
            completed: task.completed,
            assignTo: task.assignTo
        });
        taskToAdd.save(function (err, task) {
            if (err) {
                console.log("saving error" + err);
            }
        });
    }
    toggleCompletedForTask(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            taskModel_1.default.findById(taskId, function (err, task) {
            }).exec().then((result) => __awaiter(this, void 0, void 0, function* () {
                yield taskModel_1.default.findOneAndUpdate({ id: taskId, }, { completed: !result.completed });
            }));
        });
    }
    deleteTask(taskId) {
        taskModel_1.default.findByIdAndDelete(taskId, null, function (err, task) {
        });
    }
}
exports.MongoDb = MongoDb;
//# sourceMappingURL=mongoDB.js.map