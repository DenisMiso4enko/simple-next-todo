"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import { addTodo } from "@/api";
import * as uuid from "uuid";
import { useRouter } from "next/navigation";

export default function AddTask() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [taksValue, setTaskValue] = useState("");
  const handleAddNewTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addTodo({
      id: uuid.v4(),
      title: taksValue,
    });
    setTaskValue("");
    setModalOpen(false);
    router.refresh();
  };
  return (
    <div>
      <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
        Add New Taks
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleAddNewTodo}>
          <h3 className="font-bold text- lg">Add new task</h3>
          <div className="modal-action">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              value={taksValue}
              onChange={(e) => setTaskValue(e.target.value)}
            />
            <button type="submit" className="btn">
              Add
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
