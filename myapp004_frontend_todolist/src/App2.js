//상태전달 : Context API + useContext()

import logo from "./logo.svg";
import "./App.css";
import { useRef, useState, useEffect } from "react";
import Todo from "./components/todo2";
import Input from "./components/input2";
import { InputContext } from "./contexts/InputContext";
import { TodoContext } from "./contexts/TodoContext";
import axios from "axios";
import { baseUrl } from "./apiurl";

function App() {
  const inputRef = useRef("");

  const wrap = {
    width: "500px",
    border: "1px solid black",
    margin: "10px auto",
  };

  // let boardList = [
  //   { id: 1, todoname: "운동", completed: 0 },
  //   { id: 2, todoname: "SMS꾸미기", completed: 0 },
  //   { id: 3, todoname: "사진정리", completed: 0 },
  // ];

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  const insertTodo = async (e) => {
    e.preventDefault();

    await axios
      .post(baseUrl + "/todo/", { todoname: input })
      .then((response) => {
        console.log(response.data);
        setInput("");
        getTodos();
      });
  };

  const deleteTodo = async (id) => {
    await axios
      .delete(baseUrl + "/todo/" + id)
      .then((response) => {
        console.log(response.data);
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateTodo = async (id) => {
    let data = todos.filter((todo) => todo.id === id);

    console.log(data.completed);
    let completed = todos.filter((todo) => todo.id === id)[0].completed;
    console.log("datacompleted", completed);

    await axios
      .put(baseUrl + "/todo/" + id + "/" + completed)
      .then((response) => {
        console.log(response.data);
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getTodos = async () => {
    await axios
      .get(`${baseUrl}/todo/all`) //.get(baseUrl +'/todo/all')
      .then((response) => {
        console.log(response);

        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    inputRef.current.focus();
    console.log("useEffect");
  }, [input]);

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className='App' style={wrap}>
      <h1>TODO LIST</h1>
      <InputContext.Provider
        value={{ insertTodo, input, handleChangeText, inputRef }}
      >
        <Input />
      </InputContext.Provider>

      <TodoContext.Provider value={{ todos, updateTodo, deleteTodo }}>
        <Todo />
      </TodoContext.Provider>
    </div>
  );
}

export default App;