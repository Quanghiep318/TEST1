import { useState } from "react";
import "./TodoForm.css";
import axios from "axios";

interface ITodoFormProps {
  handleCallAPI: () => void;
}

const TodoForm = (props: ITodoFormProps) => {
  const [inputValue, setInputValue] = useState("");
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/tasks", {
        _name: inputValue,
      });

      setInputValue("");
      props.handleCallAPI();
      return "tạo mới thành công";
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="todo-form">
      <h3>Add to the todo list</h3>
      <form className="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          id="todo"
          onChange={handleOnChange}
          value={inputValue}
        />
        <button type="submit">ADD ITEM</button>
      </form>
    </div>
  );
};

export default TodoForm