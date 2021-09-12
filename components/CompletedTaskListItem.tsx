import { Checkbox } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { Task } from "../data/task";

interface Props {
  task: Task;
  onDelete: (task: Task) => void;
}

export const CompletedTaskListItem: FunctionComponent<Props> = ({
  task,
  onDelete
}) => {
  const onClick = () => {
    onDelete(task);
  };

  return (
    <>
      <li>
        <Checkbox
          onClick={onClick}
          defaultChecked
          indeterminate
          inputProps={{ 'aria-label': 'indeterminate checkbox' }}
        />
      <span className="strike">{task.name}&nbsp;</span>
        
      </li>
    </>
  );
};
