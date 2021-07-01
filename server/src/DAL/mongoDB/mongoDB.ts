import { TaskDTO } from "../../types/task";
import { ITodoDatabase } from "../IDatabase";
import Task from './models/taskModel';
import mongoose from 'mongoose';
import { MongoConfig } from '../../config';
import ITask from "./interfaces/ITask";

export class MongoDb implements ITodoDatabase {
    constructor() {
        try {
            mongoose.connect(MongoConfig.url, MongoConfig.options)
        } catch (e: any) {
            console.log("Mongo connection faild: " + e);
        }
    }
    async getAllTasks(): Promise<TaskDTO[]> {
        return await Task.find().exec();
    }
    addTask(task: TaskDTO) {
        const taskToAdd = new Task({
            id: task.id,
            title: task.title,
            description: task.description,
            completed: task.completed,
            assignTo: task.assignTo
        })
        taskToAdd.save(function (err: mongoose.NativeError, task: ITask) {
            if (err) {
                console.log(err);
            }

        });
    }
    async toggleCompletedForTask(taskId: string) {
        Task.findById(taskId, function (err: mongoose.NativeError, task: ITask) {

        }).exec().then(async (result) => {
            await Task.findOneAndUpdate({ id: taskId, }, { completed: !result.completed });

        })
    }
    deleteTask(taskId: string) {
        Task.findByIdAndDelete(taskId, null, function (err: mongoose.NativeError, task: ITask) {
        })
    }

}