import { TaskDTO } from "../../types/task";
import { Task } from "../task";

import '../../css/taskList.css';

function sortByTitle(a: TaskDTO, b: TaskDTO) {
    const textA: string = a.title;
    const textB: string = b.title;
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
}

interface IProps {
    children: never[],
    className: string,
    title: string,
    taskList: TaskDTO[]
}

export const TaskList = (props: IProps) => {

    return <div className="taskList">
        <div className="title">{props.title}</div>
        {props.taskList.sort(sortByTitle).map((task: TaskDTO) => {
            return <Task key={task.id} task={task}></Task>
        })}
    </div>
}