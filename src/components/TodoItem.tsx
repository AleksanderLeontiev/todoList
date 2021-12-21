import React from 'react';
import Button from "./UI/button/Button";
import {Task} from "../types/task";
import * as moment from "moment";

interface PropsTodoItem {
    task: Task[],

    remove(task: string): void
}

const TodoItem: React.FC<PropsTodoItem> = (props: PropsTodoItem): any => {
    console.log("props todoitem",props.task);
    return (
        <div className='Ap'>
            <li style={{display: "flex", width: "50px", height: "50px"}}>{props.task.map(
                (tas) => <li>{tas.description}</li>)}
                <div style={{margin: '15px 0'}}>
                    <Button title="DELETE" onClick={() => props.remove(props.task.toString())}>DELETE</Button>
                </div>
            </li>
        </div>
    )
};
export default TodoItem;

