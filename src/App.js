import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todos from "./pages/Todos";
import TodoProvider from "./context/TodoProvider";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={
            <TodoProvider>
              <Todos />
            </TodoProvider>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
