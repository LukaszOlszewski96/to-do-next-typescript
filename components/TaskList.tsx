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
            {tasks.length == 0 ? "-" : null}
            <ul>
                {tasks.map((task,_i) =>{
                    <TaskListItem key={_i} task={task} onDelete={onDelete} />
                })}
            </ul>
        </div>

)}