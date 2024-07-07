import { MdDelete } from "react-icons/md";

export default function Todo({ title, description, isDone }) {
  return (
    <div className="flex gap-4 w-screen justify-center items-center">
      <input type="checkbox" className="size-6" checked={isDone}></input>
      <div className="flex border border-slate-400 rounded-2xl p-2 gap-2 w-1/2">
        <div className="flex w-3/4 px-2">
          <h1 className="font-bold font-sans uppercase">{title}</h1>
        </div>
        <div className="flex w-1/4 justify-end px-2">
          <button>
            <MdDelete></MdDelete>
          </button>
        </div>
      </div>
    </div>
  );
}
