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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PGDB = void 0;
const pg_1 = require("pg");
const config_1 = require("../../config");
class PGDB {
    constructor() {
        console.log(config_1.PostgresConfig);
        this.pool = new pg_1.Pool({
            max: 20,
            user: config_1.PostgresConfig.username,
            host: config_1.PostgresConfig.hostName,
            database: config_1.PostgresConfig.dbName,
            password: config_1.PostgresConfig.password,
            port: config_1.PostgresConfig.port,
            idleTimeoutMillis: config_1.PostgresConfig.idleTimeoutMillis
        });
    }
    getAllTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            let todos;
            try {
                const client = yield this.pool.connect();
                const query = "SELECT * FROM tasks";
                const { rows } = yield client.query(query);
                todos = rows;
                client.release();
            }
            catch (e) {
                console.log("ddddd" + e);
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