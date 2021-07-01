import { TaskDTO } from "../types/task";
import { ITodoDatabase } from "./IDatabase";

export class DBManager implements ITodoDatabase {
    private _dbs: ITodoDatabase[];
    private _currDb: number;

    constructor(dbs: ITodoDatabase[]) {
        this._dbs = dbs;
        this._currDb = 0;
    }

    pushDB(db: ITodoDatabase) {
        this._dbs.push(db);
    }

    setActiveDB(db: number) {
        this._currDb = db;
    }

    async getAllTasks(): Promise<TaskDTO[]> {
        return await this._dbs[this._currDb].getAllTasks();
    }
    async addTask(task: TaskDTO) {
        await Promise.all(this._dbs.map(async (db) => {
            await db.addTask(task);
        }));
    }
    async toggleCompletedForTask(taskId: string) {
        await Promise.all(this._dbs.map(async (db) => {
            await db.toggleCompletedForTask(taskId);
        }));
    }
    async deleteTask(taskId: string) {
        await Promise.all(this._dbs.map(async (db) => {
            await db.deleteTask(taskId);
        }));
    }
}