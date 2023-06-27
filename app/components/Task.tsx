"use client";
import { ITask } from "@/types/tasks";
import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";

const Task = ({ task }: { task: ITask }) => {
  const router = useRouter();
  const [editlOpen, setEditOpen] = useState(false);
  const [newTaksValue, setNewTaskValue] = useState(task.title);
  async function handleAddEditTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await editTodo({
      id: task.id,
      title: newTaksValue,
    });
    setEditOpen(false);
    setNewTaskValue("");
    router.refresh();
  }

  const handleDeleteTodo = async (id: string) => {
    await deleteTodo(task.id);
    router.refresh();
  };

  return (
    <tr id={task.id}>
      <th className="w-full">{task.title}</th>
      <td className="flex gap-5">
        <BiEditAlt
          cursor={"pointer"}
          size={24}
          className="text-blue-500"
          onClick={() => setEditOpen(true)}
        />
        <MdDelete
          cursor={"pointer"}
          size={24}
          className="text-red-500"
          onClick={() => handleDeleteTodo(task.id)}
        />
        <Modal modalOpen={editlOpen} setModalOpen={setEditOpen}>
          <form onSubmit={handleAddEditTodo}>
            <h3 className="font-bold text- lg">Add new task</h3>
            <div className="modal-action">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                value={newTaksValue}
                onChange={(e) => setNewTaskValue(e.target.value)}
              />
              <button type="submit" className="btn">
                Add
              </button>
            </div>
          </form>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
