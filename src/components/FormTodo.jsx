import React, { useState } from "react";

const FormTodo = props => {

  const { handleAddItem } = props; 
  const [description, setDescription] = useState(""); // (F-1)

  const handleSubmit = e => {
    e.preventDefault(); 
 
    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description
    });
    setDescription(""); 
  };

  return (
    <form onSubmit={handleSubmit}>
      {/*(D)*/}
      <div className="todo-list">
        <div className="file-input">
          {/*(F-2)*/}
          <input
            type="text"
            className="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          {/*(A)*/}
          <button
            className="button pink"
            disabled={description ? "" : "disabled"}
          >
            Agregar
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormTodo;