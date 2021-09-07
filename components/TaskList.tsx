import React, {FunctionComponent} from "react";
import { Task } from "../data/task";
import { TaskListItem } from "./TaskListItem";


interface Props {
    tasks: Task[];
    onDelete: (task: Task) => void;
}


export const TaskList: FunctionComponent<Props> = ({tasks,onDelete}) =>{
    

  return(
        <div className="list-box">
            <h3>Task List</h3>
            <ul>
                {tasks.map((task,index) =>(
                    <TaskListItem key={index} task={task} onDelete={onDelete} />
                ))}
            </ul>
        </div>

)};