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
class TaskController {
    constructor(provider, socket) {
        this.provider = provider;
        this.socket = socket;
        this.Router = express_1.default.Router();
        this.initializeRoutes(provider, socket);
    }
    initializeRoutes(provider, socket) {
        this.Router.get('/', function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log("really really before");
                res.send(yield provider.getAllTasks());
            });
        });
        this.Router.delete('/:id', function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                yield provider.deleteTask(req.params.id);
                socket.emit('UpdateTasks');
                res.send(200);
            });
        });
        this.Router.put('/:id', function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log("toggled");
                yield provider.toggleCompleted(req.params.id);
                console.log("after toggled");
                socket.emit('UpdateTasks');
                res.send(200);
            });
        });
        this.Router.post('/', function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                yield provider.addTask({
                    id: req.body.id,
                    title: req.body.title,
                    description: req.body.description,
                    completed: req.body.completed,
                    assignTo: req.body.assignTo
                });
                socket.emit('UpdateTasks');
                res.send(200);
            });
        });
    }
}
exports.TaskController = TaskController;
//# sourceMappingURL=taskController.js.map