import React, { FunctionComponent } from "react";
import {Task} from '../data/task';
import TextField from "@material-ui/core/TextField";

interface Props{
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
    task: Task;
    disabled: boolean;
}

export const TaskForm: FunctionComponent<Props> = ({
    onChange,
    onAdd,
    task
}) => (

    <form className="input-form" onSubmit={onAdd}>
        <TextField className="text-field" variant="outlined" label="New task" onChange={onChange} value={task.name}/>
    </form>
)