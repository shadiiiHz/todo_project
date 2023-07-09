
import { useContext, useEffect, useState } from "react"
import CreateTodo from "../components/CreateTodo";
import DeleteTodo from "../components/DeleteTodo";
import FilterTodos from "../components/FilterTodos";
import UpdateTodo from "../components/UpdateTodo";
import TodoContext from "../context/TodoContext"
const Todos = () => {
    const { todos, getTodo, error } = useContext(TodoContext)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    
        const fetchData = async () => {
            await getTodo();
            setLoading(false)

        }
        fetchData();


    }, [])
    return (
        <>
            <div className="container mt-5">
                <div className="row g-3">
                    <CreateTodo />
                    <hr />
                    <FilterTodos />
                    {error && <div>{error}</div>}
                    {loading && <div className=" col-md-12 text-center "><div className="spinner-border text-dark mt-5"></div></div>}
                    {todos && todos.map(todo => (
                        <div className="col-md-4" key={todo.id}>
                            <div className={"card " + (todo.completed && "bg-light")}>
                                <div className="card-body d-flex justify-content-between align-items-center">
                                    <div>
                                        {todo.completed ? <del>{todo.title}</del> : <span>{todo.title}</span>}
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <UpdateTodo todo={todo}/>
                                        
                                        <DeleteTodo todo={todo}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



        </>

    )
}
export default Todos