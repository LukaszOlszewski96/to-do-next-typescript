import { isTargetLikeServerless } from 'next/dist/server/config';
import React, { useState } from 'react';
import {TaskForm} from '../components/TaskForm';
import {Task} from '../data/task';

function App() {

    const [newTask,setNewTask] = useState({
        id:1,
        name:"",
        completed: false
    });

    const [tasks, setTasks] = useState(new Array<Task>());


    const addTask = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setNewTask({
            id: newTask.id + 1,
            name:"",
            completed:false
        });
        setTasks([...tasks,newTask]);
    }

    const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask({
            ...newTask,
            name: event.target.value
        });
    };


    return(
        <div className="container">
            <h1>
               To Do List
            </h1>
            <TaskForm 
                disabled={newTask.name.length == 0}
                task={newTask}
                onAdd={addTask}
                onChange={handleTaskChange}/>
        </div>
    )
}

export  default App;