"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const config_1 = require("./../config");
class PGDB {
    constructor() {
        this.pool = new pg_1.Pool({
            max: 20,
            connectionString: `postgres://${config_1.PG_USERNAME}:${config_1.PG_PASSWORD}@${config_1.PG_HOST_NAME}:${config_1.PG_PORT}/${config_1.PG_DB_NAME}`,
            idleTimeoutMillis: 30000
        });
    }
    getAllTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            let todos;
            try {
                console.log("really before");
                const client = yield this.pool.connect();
                const query = "SELECT * FROM tasks";
                console.log("before");
                const { rows } = yield client.query(query);
                console.log("after");
                todos = rows;
                console.log(todos.length);
                client.release();
            }
            catch (e) {
                console.log(e);
            }
            return todos || [];
        });
    }
    addTask(task) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.pool.connect();
            const query = `INSERT INTO tasks(id, title, description, assignTo, completed) 
        VALUES('${task.id}', '${task.title}', '${task.description}', '${task.assignTo}', '${task.completed}')`;
            yield client.query(query);
            client.release();
        });
    }
    toggleCompletedForTask(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.pool.connect();
            const query = `UPDATE tasks 
        SET completed = NOT completed
        WHERE id = '${taskId}'`;
            yield client.query(query);
            client.release();
        });
    }
    deleteTask(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.pool.connect();
            const query = `DELETE FROM tasks 
        WHERE id = '${taskId}'`;
            yield client.query(query);
            client.release();
        });
    }
}
exports.PGDB = PGDB;
//# sourceMappingURL=postgresqlDB.js.map