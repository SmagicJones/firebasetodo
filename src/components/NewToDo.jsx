import { useState } from "react";
import { addDoc } from "firebase/firestore";

export const NewToDo = ({ todoListCollectionRef, setTodoList }) => {
  const [newToDoDetails, setNewTodoDetails] = useState("");
  const [newToDoNotes, setNewTodoNotes] = useState("");
  const [isDone, setIsDone] = useState(false);

  const onSubmitTodo = async (e) => {
    e.preventDefault();
    try {
      await addDoc(todoListCollectionRef, {
        details: newToDoDetails,
        notes: newToDoNotes,
        done: isDone,
      });
      setTodoList((currValues) => [newToDoDetails, newToDoNotes, ...currValues])
      setNewTodoDetails("");
      setNewTodoNotes("");
    //   getTodoList();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="grid display-items-center">
      <form className="w-full max-w-sm" onSubmit={onSubmitTodo}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="todo"
            >
              todo
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="todo"
              type="text"
              placeholder="what needs doing"
              value={newToDoDetails}
              onChange={(e) => setNewTodoDetails(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="notes"
            >
              notes
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="notes"
              placeholder="break it down a bit"
              value={newToDoNotes}
              onChange={(e) => setNewTodoNotes(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              
            >
              Add
            </button>
          </div>
        </div>
      </form>
      {/* <h3>New todo</h3>
      <form onSubmit={onSubmitTodo}>
        <label htmlFor="details">What needs doing? </label>
        <input
          id="details"
          value={newToDoDetails}
          onChange={(e) => setNewTodoDetails(e.target.value)}
        />
        <br />
        <label htmlFor="notes">notes </label>
        <input
          id="notes"
          value={newToDoNotes}
          onChange={(e) => setNewTodoNotes(e.target.value)}
        />
        <button>Add</button>
      </form> */}
    </div>
  );
};
