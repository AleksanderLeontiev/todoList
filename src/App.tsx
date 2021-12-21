import React, {useEffect, useState} from 'react';
import './App.css'
import {db} from "./firebase/config";
import List from "./components/List";
import {getCollection} from "./API";
import {NavLink, Switch, Route} from "react-router-dom";
import UserList from "./components/UserList";
import {User} from "./types/user";
import TaskList from "./components/UI/TaskList";
import TodoForm from "./components/UI/TodoForm";
import Menu from "./components/Menu";
import {Task} from "./types/task";
import TodoList from './components/TodoList';
import {get} from "http";
import {createTask, deleteTask, updateTask} from "./store/actions/userAction";
import {useActions} from "./hooks/useActions";


function App() {

    const [lists, setLists] = useState([]);
    const [users, setTodos] = useState([]);
    const [tasks, setTask] = useState<any>([
        {tasks: []},
    ]);
    const {createTask} = useActions();
    const {updateTask} = useActions();
    useEffect(() => {
        // getCollection('lists').then(setLists);
        getCollection('tasks').then(setTask);

    }, []);

//добавление на страницу

    // const createTask = (task: Task) => {
    //     db.collection("tasks").add(
    //      task
    //     ).then(task => task.id);
    //     setTask([...tasks, task]);
    // };

//удаление

    const removeTask = (task: string) => {
        setTask(tasks.filter((p: { users: any[]; }) => p.users === p.users))
    };

//сортировка

    // const [selectedSort, setSelectedSort] = useState("");
    // const sortTask = (sort: string) => {
    //     setSelectedSort(sort);
    //     setTask([...tasks].sort((a: any, b: any) => a[sort].localeCompare(b[sort])
    //     ));
    //   };
    // const [searchQuery, setSearchQuery] = useState("");
console.log(tasks)
    return (
        <div>
            <Menu/>
                <TodoForm create={createTask} />

                {/*{tasks.length*/}
                {/*    ? <TodoList remove={removeTask} task={tasks}/>*/}
                {/*    : <div style={{ width: "250px", height: "50px", margin: '15px 0', border: "4px double black", textAlign: "center",background: "#fc0"}}>*/}
                {/*        нет задач*/}
                {/*</div>*/}
                {/*}*/}
                {/*<UserList/>*/}
                <TaskList remove={deleteTask} update={updateTask} />

        </div>
    )
}

export default App;
