import { Collapse } from "@material-ui/core";
import { Button } from "antd";
import React from "react";

import "../../css/task.css";
import { TasksService } from "../../services/tasks";
import { TaskDTO } from "../../types/task";

interface IProps {
  task: TaskDTO
}

export const Task = (props: IProps) => {
  const [expanded, setExpanded] = React.useState(false);
  return <div className="task"
    style={{ backgroundColor: props.task.completed ? "#A9A9A9" : "white" }}>
    <div className="taskContent">
      <div className="taskTitle"
        onClick={() => {
          TasksService.markAsDoneOrUndone(props.task.id)
        }}>
        {props.task.title}
      </div>
      <Button className="expandButton"
        size="small"
        type="ghost"
        shape="round"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >{expanded ? "show less" : "show more"}</Button>
      <Collapse in={expanded} timeout="auto" unmountOnExit>

        <p>{props.task.description}</p>

      </Collapse>
    </div>
    <Button className="xButton"
      size="small"
      type="default"
      shape="circle"
      onClick={async () => {
        console.log(props.task.id)
        await TasksService.deleteTaskById(props.task.id);
      }}>X</Button>
  </div>

}