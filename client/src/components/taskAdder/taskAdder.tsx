import { Button, Modal, Tooltip } from "antd";
import { useState } from "react";
import { PlusOutlined } from '@ant-design/icons';
import { TasksService } from "../../services/tasks";

import "../../css/bottomNav.css";

export const TaskAdder = (props: any) => {
    const [isFilterVisible, setIsAdderVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [assignTo, setAssignTo] = useState("");

    const showCreator = () => {
        setIsAdderVisible(true);
    };

    const handleOk = async () => {
        setIsAdderVisible(false);
        await TasksService.addTask(title, description, assignTo);
        resetFields();
    };

    const handleCancel = () => {
        setIsAdderVisible(false);
        resetFields();
    };

    const resetFields = () => {
        setTitle("");
        setDescription("")
        setAssignTo("");
    }
    const handleTitleChange = (e: any) => {
        setTitle(e.target.value);
    }

    const handleDescriptionChange = (e: any) => {
        setDescription(e.target.value)
    }

    const handleAssignToChange = (e: any) => {
        setAssignTo(e.target.value);
    }

    return <div className="taskAdder">

        <Tooltip title="Add Task">
            <Button type="primary"
                onClick={showCreator}
                icon={<PlusOutlined />}>
            </Button>
        </Tooltip>

        <Modal title="Add New Task" visible={isFilterVisible} onOk={handleOk} onCancel={handleCancel}>
            <form className="addTaskForm">

                Title:
                <input value={title} onChange={handleTitleChange}></input>
                Description:
                <textarea value={description} onChange={handleDescriptionChange}></textarea>
                Assign to:
                <input value={assignTo} onChange={handleAssignToChange}></input>
            </form>
        </Modal>
    </div>
}