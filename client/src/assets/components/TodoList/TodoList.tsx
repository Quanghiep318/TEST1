import { MdDelete } from "react-icons/md";

import "./TodoList.css";
import axios from "axios";

interface ITodoListProps {
  todo: any;

  handleCallAPI: () => void;
}

const TodoList = (props: ITodoListProps) => {
  const handleOnChangeStatus = async (e: any, todo: any) => {
    try {
      await axios.put(`http://localhost:8080/api/v1/task/${todo.id}`, {
        ...todo,
        _status: e.target.checked,
      });
      props.handleCallAPI();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTodo = async (id: string) => {
    try {
      await axios.delete("http://localhost:8080/api/v1/task/" + id);
      props.handleCallAPI();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="todo-list">
      <p style={{ textDecoration: props.todo._status ? "line-through" : "" }}>
        {props.todo._name}
      </p>
      <div className="list-icon">
        <input
          onChange={(e) => handleOnChangeStatus(e, props.todo)}
          type="checkbox"
          value={props.todo._status}
          checked={props.todo._status}
        />
        <MdDelete onClick={() => handleDeleteTodo(props.todo.id)} />
      </div>
    </div>
  );
};

export default TodoList;