import React,{useState} from 'react'
import {TodoContext} from "../providers/todo-context"
import FormTodo from './FormTodo'
import TaskList from './TaskList'

const Container = () => {
    const [list, setList] = useState([]);

  const handleAddItem = addItem => {
    setList([...list, addItem]);
  };

  const onChangeStatus = e => {
    const { name, checked } = e.target;
    const updateList = list.map(item => ({
      ...item,
      done: item.id === name ? checked : item.done
    }));
    setList(updateList);
  };

  const onClickRemoveItem = e => {
    const updateList = list.filter(item => !item.done);
    setList(updateList);
  };


  return (
    <TodoContext.Provider value={{list,handleAddItem,onChangeStatus,onClickRemoveItem}}>
        <FormTodo />
        <TaskList />
    </TodoContext.Provider>
  )
}

export default Container