import { useDispatch, useSelector } from "react-redux";

import Label from "./label3";

import { useEffect } from "react";
import { getAction } from "../reduxs/action";

const Todo = () => {
  const todos = useSelector((todos) => todos); //가지고 오는거?
  //const list = useSelector((list) => list);
  // const dispatch = useDispatch();

  // const todos = dispatch({ type: "LIST" });

  const dispatch = useDispatch(); //저장 하는거? 보내다?

  useEffect(() => {
    getAction(dispatch);
  }, []);

  return (
    <>
      {todos
        ? todos.map((todo) => {
            return (
              <div className='todo' key={todo.id}>
                <Label todo={todo} />
              </div>
            );
          })
        : null}
    </>
  );
};

export default Todo;