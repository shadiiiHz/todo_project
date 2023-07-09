import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";
const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const { AddTodo } = useContext(TodoContext);

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (title) {
      setLoading(true);
      await AddTodo(title);
      setLoading(false);
    }
  };
  return (
    <>
      <h4>Create Todo :</h4>
      <form
        onSubmit={(e) => {
          handelSubmit(e);
        }}
        className="row mt-3"
      >
        <div className="col-md-6">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Todo title..."
          />
          <div className="form-text text-danger">
            {title ? "" : "text is required"}
          </div>
        </div>
        <div className="col-md-6">
          <button type="submit" className="btn btn-dark">
            Create
            {loading && (
              <div className="spinner-grow spinner-grow-sm text-secondary ms-2"></div>
            )}
          </button>
        </div>
      </form>
    </>
  );
};
export default CreateTodo;
