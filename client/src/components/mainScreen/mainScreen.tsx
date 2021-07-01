import React from "react";
import { TaskList } from "../taskList";
import { useEffect } from "react";
import { TaskDTO } from "../../types/task";

import '../../css/mainScreen.css';
import { TasksService } from "../../services/tasks";
import { Socket } from "socket.io-client";

const defaultTask: TaskDTO = {
    id: "-1",
    title: "no tasks",
    description: "add tasks",
    completed: true,
    assignTo: "everyone"
}

interface IProps {
    socket: Socket,
    userToFilterBy: string
}

export const MainScreen = (props: IProps) => {
    const [tasks, setTasks] = React.useState([defaultTask]);

    useEffect(() => {
        props.socket.on('UpdateTasks', async () => {
            setTasks(await TasksService.getAllTasks() ?? []);
            console.log("updated tasks")
        });
    }, [props.socket])

    if (tasks[0] === defaultTask) {
        return <div>loading</div>;
    }
    return <div className="mainScreen">
        <TaskList className="list"
            title="All Tasks"
            taskList={props.userToFilterBy ?
                tasks.filter(t => t.assignTo === props.userToFilterBy).sort() :
                tasks.sort()}>
        </TaskList>

        <TaskList className="list"
            title="Done"
            taskList={props.userToFilterBy ?
                tasks?.filter(t => t.completed && t.assignTo === props.userToFilterBy).sort() :
                tasks?.filter(t => t.completed).sort()}>
        </TaskList>

        <TaskList className="list"
            title="To Do"
            taskList={props.userToFilterBy ?
                tasks?.filter(t => !t.completed && t.assignTo === props.userToFilterBy).sort() :
                tasks?.filter(t => !t.completed).sort()}>
        </TaskList>
    </div>

}