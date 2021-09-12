import React, {FunctionComponent} from "react";
import { Task } from "../data/task";
import { TaskListItem } from "./TaskListItem";
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from "@material-ui/core";

interface Props {
    tasks: Task[];
    onDelete: (task: Task) => void;
}


export const TaskList: FunctionComponent<Props> = ({tasks,onDelete}) =>{
    

  return(
        <div className="list-box">
            <ul>
                {tasks.map((task,index) =>(
                    <>
                        <div className="task-list-box">
                            <TaskListItem key={index} task={task} onDelete={onDelete} />
                            <IconButton aria-label="delete" className="icon-delete-btn" >
                            <DeleteIcon fontSize="small" />
                            </IconButton>
                        </div>
                    </>
                ))}
            
            </ul>
            
        </div>

)};