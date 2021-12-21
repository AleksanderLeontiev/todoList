import React, {useState} from 'react';
import Input from "./input/Input";
import Button from "./button/Button";
import {Task} from "../../types/task";

interface ITodoProps  {
    create(task: Task): void;

}

const TodoForm: React.FC<ITodoProps> = (props: ITodoProps): any => {
    const [inputValue, setInputValue] = useState("");

    const addTask = (e:React.MouseEvent) => {
        e.preventDefault();
        const addTask: Task = {
            // createDateTime: new Date(),
            // dateTimeExec: new Date(),
            id: "",
            description: inputValue,
            // name: inputValue,
        };
        props.create(addTask);
        setInputValue("");

    };

    return (
        <div>
            <form>
                <Input type="text" value={inputValue}
                       onChange={event => setInputValue(event.target.value)}
                />
                <Button style={{marginTop: '15px 0'}} onClick={addTask} title='Add Task'>add task</Button>
                {/*<Button title="DELETE" onClick={() => props.remove(props.task.toString())}>DELETE</Button>*/}
            </form>
        </div>
    );
};

export default TodoForm;