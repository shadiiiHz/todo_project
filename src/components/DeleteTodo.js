import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";
const DeleteTodo = ({ todo }) => {
  const { deleteTodo } = useContext(TodoContext);
  const [loading, setLoading] = useState(false);
  const handelClick = async () => {
    setLoading(true);
    await deleteTodo(todo);
  };
  return (
    <>
      <i onClick={handelClick} className="bi bi-trash-fill fs-6"></i>
      {loading && (
        <div className="spinner-grow spinner-grow-sm text-secondary "></div>
      )}
    </>
  );
};
export default DeleteTodo;
