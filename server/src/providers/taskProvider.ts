import { TaskDTO } from "../types/task";
import { ITodoDatabase } from "../DAL/IDatabase";

export class TaskProvider {
    constructor(private db: ITodoDatabase) {
    }
    async getAllTasks(): Promise<TaskDTO[]> {
        return await this.db.getAllTasks();

    }

    async deleteTask(id: string) {
        await this.db.deleteTask(id);
    }

    async toggleCompleted(id: string) {
        await this.db.toggleCompletedForTask(id);
    }

    async addTask(task: TaskDTO) {
        await this.db.addTask(task);
    }
}