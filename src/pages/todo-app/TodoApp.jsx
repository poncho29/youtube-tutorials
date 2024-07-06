import { useState } from "react";

import { IoTrash, IoPencil  } from "react-icons/io5";

const todosFakes = [
  {
    id: 1,
    description: 'Sacar a pasear el perro en la tarde',
    done: false
  },
  {
    id: 2,
    description: 'Estudiar React y hacer el proyecto de todos usando local storage',
    done: true
  }
];

export const TodoApp = () => {
  const [todos, setTodos] = useState(todosFakes);

  const [newTodo, setNewTodo] = useState('');

  const [editTodo, setEditTodo] = useState();
  const [isEditing, setIsEditing] = useState(false);

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (newTodo.trim() === '') return;

    if (isEditing && editTodo) {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === editTodo.id) {
          return {
            ...todo,
            description: newTodo
          }
        }
        return todo;
      });

      setTodos(updatedTodos);
      setIsEditing(false);
      setEditTodo(null);
      setNewTodo('');
      return;
    }

    // Se crea el nuevo TODO con todos los campos requeridos
    const newTodoComplete = {
      id: Date.now(),
      description: newTodo,
      done: false
    }
    
    setTodos((prevTodos) => [...prevTodos, newTodoComplete]);
    setNewTodo('');
  }

  const handleEditTodo = (todo) => {
    setIsEditing(true);
    setEditTodo(todo);
    setNewTodo(todo.description);
  }


  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center p-2"
    >
      <section className="w-[520px] h-auto p-4 rounded-md bg-slate-200 shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-4">TODO APP</h1>

        {/* Form */}
        <div>
          <form className="flex gap-4" onSubmit={handleAddTodo}>
            <input
              type="text"
              placeholder="Agregar nueva tarea"
              className="grow px-4 rounded-md focus:outline-blue-500"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />

            <button
              type="submit"
              className="text-white font-semibold uppercase py-2 px-4 rounded bg-blue-500 hover:bg-blue-700"
            >
              { isEditing ? 'Editar' : 'Agregar' }
            </button>
          </form>

          <hr className="my-4 border-slate-400" />

          {/* Filters */}
          <div className="my-4">
            <input
              type="text"
              placeholder="Buscar"
              className="w-full p-2 mb-2 rounded-md focus:outline-blue-500"
            />

            <div
              className="flex justify-between"
            >
              <button
                className="text-white font-semibold uppercase py-2 px-4 rounded bg-blue-500 hover:bg-blue-700"
              >
                Todas
              </button>

              <button
                className="text-white font-semibold uppercase py-2 px-4 rounded bg-green-500 hover:bg-green-600"
              >
                Completadas
              </button>

              <button
                className="text-white font-semibold uppercase py-2 px-4 rounded bg-orange-500 hover:bg-orange-700"
              >
                Pendientes
              </button>
              
              <button
                className="text-white font-semibold uppercase py-2 px-4 rounded bg-red-500 hover:bg-red-600"
              >
                Limpiar
              </button>
            </div>
          </div>


          <hr className="my-4 border-slate-400" />


          {/* List */}

          <h2 className="text-xl font-semibold mb-4">Tareas</h2>

          <ul className="flex flex-col gap-2">
            {/* Item list */}
            {todos.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between gap-4 bg-slate-300 p-2 rounded cursor-pointer
                transition-all duration-300 hover:scale-110 hover:shadow-xl "
              >
                <span className="grow">
                  { item.description }
                  {/* { item.descripton.substring(0, 52) }{ item.descripton.length > 52 ? '...' : '' } */}
                </span>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditTodo(item)}
                    className="p-1 rounded-md transition-all duration-300 bg-blue-500 hover:bg-blue-700"
                  >
                    <IoPencil size={20} className="text-white" />
                  </button>
                  <button
                    className="p-1 rounded-md transition-all duration-300 bg-red-500 hover:bg-red-600"
                  >
                    <IoTrash size={20} className="text-white" />
                  </button>
                </div>
              </li>
            ))}
            
          </ul>
        </div>
      </section>
    </div>
  )
}
