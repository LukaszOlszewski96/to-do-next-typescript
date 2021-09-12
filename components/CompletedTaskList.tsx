import React, { FunctionComponent } from "react";
import { Task } from "../data/task";
import { CompletedTaskListItem } from "./CompletedTaskListItem";

interface Props {
  tasks: Task[];
  onDelete: (task: Task) => void;
}

export const CompletedTaskList: FunctionComponent<Props> = ({
  tasks,
  onDelete
}) => (
  <div className="done-list-conteiner">
    <div className="done-list" >
      <h3 className="done-title">Done:</h3>
      {tasks.length == 0 ? "" : null}
      <ul>
        {tasks.map((task, _i) => (
          <CompletedTaskListItem key={_i} task={task} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  </div>
);
