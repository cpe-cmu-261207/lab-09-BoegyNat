import React from "react";
import { useEffect, useState } from "react";
import { IconSunHigh, IconMoon } from "@tabler/icons";
import { themes } from "../libs/themes";
import { ThemeContext } from "../context/ThemeContext";
import Todolist from "../components/Todolist";
import Navbar from "../components/Navbar";

export default function lab07() {
  const [todoInput, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [selTheme, setSelTheme] = useState(themes.light);

  const deleteTodo = (idx) => {
    todos.splice(idx, 1);
    const newTodos = [...todos];
    setTodos(newTodos);
  };

  const markTodo = (idx) => {
    todos[idx].completed = !todos[idx].completed;
    setTodos([...todos]);
  };

  const moveUp = (idx) => {
    if (idx === 0) return;
    const title = todos[idx].title;
    const completed = todos[idx].completed;

    todos[idx].title = todos[idx - 1].title;
    todos[idx].completed = todos[idx - 1].completed;

    todos[idx - 1].title = title;
    todos[idx - 1].completed = completed;
    setTodos([...todos]);
  };

  const moveDown = (idx) => {
    if (idx === todos.length - 1) return;
    const title = todos[idx].title;
    const completed = todos[idx].completed;

    todos[idx].title = todos[idx + 1].title;
    todos[idx].completed = todos[idx + 1].completed;

    todos[idx + 1].title = title;
    todos[idx + 1].completed = completed;
    setTodos([...todos]);
  };

  const onKeyUpHandler = (event) => {
    if (event.key != "Enter") return;
    if (event.target.value == "") {
      alert("Todo cannot be empty");
    } else {
      const newTodo = [{ title: todoInput, completed: false }, ...todos];
      setTodos(newTodo);
      setTodo("");
    }
  };

  const saveTodos = () => {
    const todosStr = JSON.stringify(todos);
    localStorage.setItem("react-todos", todosStr);
  };

  useEffect(() => {
    const todoStr = localStorage.getItem("react-todos");
    if (todoStr === null) {
      setTodos([]);
    } else setTodos(JSON.parse(todoStr));
  }, []);

  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    saveTodos();
  }, [todos]);

  const toggleTheme = () => {
    if (selTheme.name === "light") setSelTheme(themes.dark);
    else setSelTheme(themes.light);
  };
  return (
    <div style={{ backgroundColor: selTheme.background, minHeight: "100vh" }}>
      {/* Entire App container (required for centering) */}
      <div style={{ maxWidth: "700px" }} className="mx-auto">
        {/* App header */}
        <div style={{ backgroundColor: "#2c3639" }}>
          <Navbar />
        </div>
        <p
          className="display-4 text-center fst-italic mb-4"
          style={{ color: selTheme.foreground }}
        >
          Minimal Todo List <span className="fst-normal">☑️</span>
        </p>

        {/* Input */}
        <div className="d-flex align-items-center gap-2">
          <input
            onChange={(event) => {
              setTodo(event.target.value);
            }}
            value={todoInput}
            onKeyUp={onKeyUpHandler}
            className="form-control mb-1 fs-4"
            placeholder="insert todo here..."
          />
          <button className="btn btn-dark" onClick={toggleTheme}>
            {selTheme.name === "light" && <IconSunHigh />}
            {selTheme.name === "dark" && <IconMoon />}
          </button>
        </div>
        {/* Todos */}

        <ThemeContext.Provider value={{ selTheme, toggleTheme }}>
          {todos.map((todo, i) => (
            <Todolist
              title={todo.title}
              completed={todo.completed}
              key={i}
              onDelete={() => deleteTodo(i)}
              onMark={() => markTodo(i)}
              onUp={() => moveUp(i)}
              onDown={() => moveDown(i)}
            />
          ))}
        </ThemeContext.Provider>

        {/* summary section */}
        <p className="text-center fs-4">
          <span className="text-primary">All ({todos.length}) </span>
          <span className="text-warning">
            Pending ({todos.filter((x) => x.completed === false).length}){" "}
          </span>
          <span className="text-success">
            Completed ({todos.filter((x) => x.completed === true).length})
          </span>
        </p>

        {/* Made by section */}
        <p className="text-center mt-3 text-muted fst-italic">
          made by Nat Ucharattana 640610632
        </p>
      </div>
    </div>
  );
}
