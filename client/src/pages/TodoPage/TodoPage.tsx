import axios from "axios";
import TodoForm from "../../assets/components/todo-form/TodoForm";
import TodoList from "../../assets/components/TodoList/TodoList";

import "./TodoPage.css";
import { useEffect, useState } from "react";

const TodoPage = () => {
  const [todo, setTodo] = useState<any>([]);
  const handleCallAPI = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/v1/tasks");
      setTodo(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    handleCallAPI();
  }, []);

  return (
    <div className="container">
      <header>
        <h2>Todo List</h2>
        <p>Get thing done, one item at time</p>
        <div></div>
      </header>
      <div style={{ margin: "30px 0 40px" }}>
        {todo?.map((item: any) => {
          return (
            <TodoList handleCallAPI={handleCallAPI} key={item.id} todo={item} />
          );
        })}
        <p style={{ textAlign: "right", marginRight: "50px" }}>
          Move done item at the end?{" "}
        </p>
      </div>

      <TodoForm handleCallAPI={handleCallAPI} />
    </div>
  );
};
