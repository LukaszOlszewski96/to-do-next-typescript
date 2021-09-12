import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { isTargetLikeServerless } from 'next/dist/server/config';
import React, { useState } from 'react';
import { CompletedTaskList } from '../components/CompletedTaskList';
import {TaskForm} from '../components/TaskForm';
import { TaskList } from '../components/TaskList';
import {Task} from '../data/task';

function App() {

    const [newTask,setNewTask] = useState({
        id:1,
        name:"",
        completed: false
    });

    const [tasks, setTasks] = useState(new Array<Task>());
    const [completedTasks, setCompletedTasks] = useState(new Array<Task>());
    const [isCompletedListActive, setCompletedListActive] = useState(false);

    const addTask = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setNewTask({
            id: newTask.id + 1,
            name:"",
            completed:false
        });
        setTasks([...tasks,newTask]);
    };

    const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask({
            ...newTask,
            name: event.target.value
        });
    };

    const deleteTask = (taskToDelete: Task) =>{
        setTasks([...tasks.filter(task => task.id !== taskToDelete.id)]);
        setCompletedTasks([...completedTasks, taskToDelete]);
    };

    const undoTask = (taskToUndo: Task) => {
        setCompletedTasks([
          ...completedTasks.filter(task => task.id !== taskToUndo.id)
        ]);
        setTasks([...tasks, taskToUndo]);
      };

    const completeListActiveElement = (
        <div className="complete-list-element">
          <Checkbox
            defaultValue={isCompletedListActive.toString()}
            onChange={() => setCompletedListActive(!isCompletedListActive)}
            id="completedListActive"
            color="primary"
          />
          <label className="label-done" >Done Tasks ({completedTasks.length})</label>
        </div>
      );


    return(
        <div className="container">
          <div className="background-title">
            <h1 className="title">
               T O D O
            </h1>
          </div>
          <TaskForm
                disabled={newTask.name.length == 0}
                task={newTask}
                onAdd={addTask}
                onChange={handleTaskChange}/>
            {completeListActiveElement}
            <TaskList
                tasks={tasks}
                onDelete={deleteTask}
                />
            {isCompletedListActive ? (
          <CompletedTaskList tasks={completedTasks} onDelete={undoTask} />
        ) : null}
        </div>
    )
};

export  default App;