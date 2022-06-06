import {React,useContext} from "react";
import { TodoContext } from "../providers/todo-context";
import Checkbox from "./Checkbox";

const TaskList = () => {
    const { list,onChangeStatus,onClickRemoveItem } = useContext(TodoContext);

    const chk = list.map(item => (
        <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
      ));

      return (
        <div className="todo-list">
          {list.length ? chk : "No tasks"}
          {list.length ? (
            <p>
              <button className="button blue" onClick={onClickRemoveItem}>
               Eliminar
              </button>
            </p>
          ) : null}
        </div>
      );
};

export default TaskList;