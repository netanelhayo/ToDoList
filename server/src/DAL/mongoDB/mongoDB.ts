import { TaskDTO } from "../../types/task";
import { ITodoDatabase } from "../IDatabase";
import Task from './models/taskModel';
import mongoose from 'mongoose';
import { MongoConfig } from '../../config';
import ITask from "./interfaces/ITask";

export class MongoDb implements ITodoDatabase {

    async connect() {
        try {
            await mongoose.connect("mongodb://" + MongoConfig.host + "/todo", MongoConfig.options)
            console.log("connected to mongo");
        } catch (e) {
            console.log("Mongo connection faild: " + e);
        }
        mongoose.connection.on('error', console.error.bind(console, 'mongo error:'));
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
                console.log("saving error" + err);
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