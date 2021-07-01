import axios from "axios";
import { v1 as id } from "uuid";

import { SERVER_URL } from "../config";
import { TaskDTO } from "../types/task";

export const TasksService = {
    getAllTasks: async (): Promise<TaskDTO[] | undefined> => {

        try {
            console.log("before");
            const b: TaskDTO[] = (await axios.get(SERVER_URL + "/tasks")).data;
            console.log("after");
            return b;
        } catch (e) {
            console.log(e);
        }
        return undefined;
    },

    deleteTaskById: async (id: string) => {
        await axios.delete(SERVER_URL + `/tasks/${id}`);
    },

    addTask: async (title: string, description: string, assignTo: string) => {
        await axios.post(SERVER_URL + "/tasks", {
            id: id(),
            title: title,
            description: description,
            completed: false,
            assignTo: assignTo
        })
    },

    markAsDoneOrUndone: async (id: string) => {
        await axios.put(SERVER_URL + `/tasks/${id}`);
        console.log("Task toggled")
    }


}