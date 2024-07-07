import { useState } from "react";

export default function Input({ updateTodo }) {
  const [title, setTitle] = useState("");

  function handleChange(event) {
    setTitle(event.target.value);
  }

  function handleSubmit() {
    updateTodo((prevList) => {
      const updatedList = [...prevList, { title: title, isDone: false }];
      return updatedList;
    });
  }
  return (
    <div className=" flex justify-center items-center p-4 gap-4 flex-col">
      <div className="flex flex-row gap-8 justify-center items-center">
        <h3>Task: </h3>
        <input
          className="h-8 w-80 border-2 border-teal-400"
          onChange={handleChange}
        ></input>
        <h3>Details: </h3>
        <input className="h-8 w-80 border-2 border-teal-400"></input>
      </div>
      <div className="flex w-full justify-center items-center">
        <button
          className="px-4 py-2 rounded-xl bg-teal-400  text-white text-center items-center"
          onClick={handleSubmit}
        >
          Add task
        </button>
      </div>
    </div>
  );
}
