import { Checkbox, IconButton } from "@material-ui/core";

import React from "react";
import { FunctionComponent } from "react";
import { Task } from "../data/task";


interface Props {
    task: Task;
    onDelete: (task: Task) => void;
}



export const TaskListItem: FunctionComponent<Props> = ({task, onDelete}) =>{

    const onClick = () => {
        onDelete(task);
        console.log({})
    };

    const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

    return(
        <li>
            <Checkbox
            checked={checked}
            onChange={handleChange}
            onClick={onClick}
            color="primary"
            />
            {task.name}
            
        </li>
    )

}