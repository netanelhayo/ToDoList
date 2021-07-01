"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskController_1 = require("../providers/taskController");
const taskRouter = express_1.default.Router();
const provider = new taskController_1.TaskProvider();
taskRouter.get('/', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.send(yield provider.getAllTasks());
    });
});
taskRouter.delete('/:id', function (req, res) {
    provider.deleteTask(req.params.id);
});
taskRouter.put('/:id', function (req, res) {
    provider.toggleCompleted(req.params.id);
});
taskRouter.post('/', function (req, res) {
    console.log(req);
    provider.addTask({
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
        assignTo: req.body.assignTo
    });
});
exports.default = taskRouter;
//# sourceMappingURL=taskRouter.js.map