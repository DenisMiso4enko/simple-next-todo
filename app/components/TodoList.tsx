import { ITask } from "@/types/tasks";
import React, { FC } from "react";
import Task from "./Task";

interface TodoListProps {
  tasks: ITask[];
}

export const TodoList: FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
