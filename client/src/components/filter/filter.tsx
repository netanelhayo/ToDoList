import { FilterOutlined } from "@ant-design/icons";
import { Button, Modal, Tooltip } from "antd";
import { useState } from "react";

import 'antd/dist/antd.css';
import "../../css/bottomNav.css"

interface IProps {
    setFilter: (filter: string) => void;
}

export const Filter = (props: IProps) => {
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [userFilter, setUserFilter] = useState("");

    const handleChange = (e: any) => {
        e.preventDefault();
        setUserFilter(e.target.value)
    }
    const showFilter = () => {
        setIsFilterVisible(true);
    };

    const handleOk = () => {
        setIsFilterVisible(false);
        props.setFilter(userFilter);
    };

    const handleCancel = () => {
        setIsFilterVisible(false);
        setUserFilter("");
    };

    return <div className="filter">
        <Tooltip title="filter">
            <Button type="primary"
                onClick={showFilter}
                icon={<FilterOutlined />}>
            </Button>
        </Tooltip>
        <Modal title="Filter tasks by user" visible={isFilterVisible} onOk={handleOk} onCancel={handleCancel}>
            Enter user name to filter by:
            <input className="filterInput"
                onChange={handleChange}
                value={userFilter}></input>
        </Modal>
    </div>
}