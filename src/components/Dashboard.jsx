import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

import { ToDoCard } from "./ToDoCard";
import { NewToDo } from "./NewToDo";

export const Dashboard = () => {
  const [todolist, setTodoList] = useState([]);

  const todolistCollectionRef = collection(db, "todo");

  useEffect(() => {
    const getTodoList = async () => {
      try {
        const data = await getDocs(todolistCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setTodoList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getTodoList();
  }, []);

  return (
    <>
      <div className="p-8 grid place-content-center radial-blue">
        <div className="bg-emerald-500 w-52 h-52 rounded-full drop-shadow-md grid place-content-center">
          <div className="bg-teal-200 w-32 h-32 rounded-full grid place-content-center">
            <div className="bg-red-500 w-16 h-16 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="min-h-screen grid place-content-center">
        <h1 className="text-8xl p-4">Todo List</h1>
        <NewToDo
          todoListCollectionRef={todolistCollectionRef}
          setTodoList={setTodoList}
        />

        {todolist.map((todo, i) => (
          <div className="grid">
            <ToDoCard
              key={i}
              details={todo.details}
              notes={todo.notes}
              done={todo.done}
            />
          </div>
        ))}
      </div>
    </>
  );
};
