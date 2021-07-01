import { Filter } from "../filter";
import { TaskAdder } from "../taskAdder";

import "../../css/bottomNav.css";

interface IProps {
    setFilter: (filter: string) => void;
}

export const BottomNav = (props: IProps) => {

    return <div className="bottomNav">
        <Filter setFilter={props.setFilter}></Filter>
        <TaskAdder></TaskAdder>
    </div>
}