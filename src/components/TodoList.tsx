import React from 'react';
import TodoItem from "./TodoItem";
import {Task} from "../types/task";

interface PropsTodoList {
    task: Task[],
    remove(task: string): void
}
const TodoList: React.FC<PropsTodoList> = (props: PropsTodoList): any => {
console.warn("todolist",props.task);
    return (
        <div className="todos">
            {props.task.map((task, index) => {
                return (<TodoItem remove={props.remove} task={props.task} key={index}/>);
            })}

        </div>
    );
};

export default TodoList;