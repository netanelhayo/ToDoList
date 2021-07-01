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
exports.DBManager = void 0;
class DBManager {
    constructor(dbs) {
        this._dbs = dbs;
        this._currDb = 0;
    }
    pushDB(db) {
        this._dbs.push(db);
    }
    setActiveDB(db) {
        this._currDb = db;
    }
    getAllTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._dbs[this._currDb].getAllTasks();
        });
    }
    addTask(task) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all(this._dbs.map((db) => __awaiter(this, void 0, void 0, function* () {
                yield db.addTask(task);
            })));
        });
    }
    toggleCompletedForTask(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all(this._dbs.map((db) => __awaiter(this, void 0, void 0, function* () {
                yield db.toggleCompletedForTask(taskId);
            })));
        });
    }
    deleteTask(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all(this._dbs.map((db) => __awaiter(this, void 0, void 0, function* () {
                yield db.deleteTask(taskId);
            })));
        });
    }
}
exports.DBManager = DBManager;
//# sourceMappingURL=dbManager.js.map