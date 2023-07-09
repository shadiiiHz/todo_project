import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";
const UpdateTodo = ({ todo }) => {
  const { updateTodo } = useContext(TodoContext);
  const [loading, setLoading] = useState(false);
  const handelupdate = async () => {
    setLoading(true);
    await updateTodo(todo);
    setLoading(false);
  };
  return (
    <>
      {todo.completed ? (
        <i onClick={handelupdate} className="bi bi-check-all fs-4 "></i>
      ) : (
        <i onClick={handelupdate} className="bi bi-check fs-4 "></i>
      )}
      {loading && (
        <div className="spinner-grow spinner-grow-sm text-secondary "></div>
      )}
    </>
  );
};
export default UpdateTodo;
