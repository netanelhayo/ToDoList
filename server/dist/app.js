"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const taskController_1 = require("./routes/taskController");
const config_1 = require("./config");
const taskProvider_1 = require("./providers/taskProvider");
const postgresqlDB_1 = require("./DAL/postgresqlDB");
const app = express_1.default();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
    cors: {
        origin: '*'
    }
});
io.on('connection', (socket) => {
    console.log('a user connected');
    io.emit('UpdateTasks');
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use(cors_1.default());
app.use(function (req, res, next) {
    console.log("message got in" + req.path);
    next();
});
const pg = new postgresqlDB_1.PGDB();
const taskProvider = new taskProvider_1.TaskProvider(pg);
const taskcontroller = new taskController_1.TaskController(taskProvider, io);
app.use('/tasks', taskcontroller.Router);
server.listen(config_1.PORT, function () {
    console.log("listening on *:3001");
});
//# sourceMappingURL=app.js.map