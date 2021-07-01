import { TaskDTO } from "../types/task";

export interface ITodoDatabase {
    getAllTasks(): Promise<TaskDTO[]>;
    addTask(task: TaskDTO);
    toggleCompletedForTask(taskId: string);
    deleteTask(taskId: string);
}