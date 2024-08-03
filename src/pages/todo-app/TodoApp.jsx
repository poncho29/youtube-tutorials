import { useEffect, useMemo, useState } from "react";

import { IoTrash, IoPencil  } from "react-icons/io5";

const FILTER_STATUS = {
  all: 'all',
  complete: 'complete',
  pending: 'pending',
}

export const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editTodo, setEditTodo] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [removingTodo, setRemovingTodo] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    status: FILTER_STATUS.all,
  });

  useEffect(() => {
    const storedTodos = localStorage.getItem('my-todos');

    if (storedTodos) setTodos(JSON.parse(storedTodos));
  }, []);

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

      localStorage.setItem('my-todos', JSON.stringify(updatedTodos));
      setTodos(updatedTodos);
      setIsEditing(false);
      setEditTodo(null);
      setNewTodo('');
      return;
    }

    const newTodoComplete = {
      id: Date.now(),
      description: newTodo,
      done: false
    }
    
    const newTodos = [newTodoComplete, ...todos];
    localStorage.setItem('my-todos', JSON.stringify(newTodos));
    setTodos(newTodos);
    setNewTodo('');
  }

  const handleEditTodo = (todo) => {
    setIsEditing(true);
    setEditTodo(todo);
    setNewTodo(todo.description);
  }

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditTodo(null);
    setNewTodo('');
  }

  const handleCompleteTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done
        }
      }
      return todo;
    });

    localStorage.setItem('my-todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  }

  const handleDeleteTodo = (id) => {
    setRemovingTodo(id);

    setTimeout(() => {
      const updatedTodos = todos.filter((todo) => todo.id !== id);

      localStorage.setItem('my-todos', JSON.stringify(updatedTodos));
      setTodos(updatedTodos);
      setRemovingTodo(null);
    }, 300);
  };

  const todosFiltred = useMemo(() => {
    const { search, status } = filters;
    
    const todoCopy = [...todos];

    const result = todoCopy.filter((todo) => {
      if (status === FILTER_STATUS.complete) { 
        return todo.done;
      } else if (status === FILTER_STATUS.pending) {
        return !todo.done;
      }

      return todo;
    });

    if (search) {
      return result.filter((todo) => todo.description.toLowerCase().includes(search.toLowerCase()));
    } else {
      return result;
    } 
  }, [todos, filters]);

  return (
    <div
      className="w-full flex flex-col items-center justify-center p-4 pt-10"
    >
      <section className="w-[520px] h-[528px] p-4 rounded-md bg-slate-200 shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-4">TODO APP</h1>

        {/* Form */}
        <div>
          <form className="flex gap-3" onSubmit={handleAddTodo}>
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
            { isEditing && (
              <button
                type="button"
                className="text-white font-semibold uppercase py-2 px-4 rounded bg-red-500 hover:bg-red-700"
                onClick={handleCancelEdit}
              >
                Cancelar
              </button>
            ) }
          </form>

          <hr className="my-4 border-slate-400" />

          {/* Filters */}
          <div className="my-4">
            <input
              type="text"
              placeholder="Buscar"
              className="w-full p-2 mb-2 rounded-md focus:outline-blue-500"
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            />

            <div
              className="flex justify-between"
            >
              <button
                className="text-white font-semibold uppercase py-2 px-4 rounded bg-blue-500 hover:bg-blue-700"
                onClick={() => setFilters({ ...filters, status: FILTER_STATUS.all })}
              >
                Todas
              </button>

              <button
                className="text-white font-semibold uppercase py-2 px-4 rounded bg-green-500 hover:bg-green-600"
                onClick={() => setFilters({ ...filters, status: FILTER_STATUS.complete })}
              >
                Completadas
              </button>

              <button
                className="text-white font-semibold uppercase py-2 px-4 rounded bg-orange-500 hover:bg-orange-700"
                onClick={() => setFilters({ ...filters, status: FILTER_STATUS.pending })}
              >
                Pendientes
              </button>
              
              <button
                className="text-white font-semibold uppercase py-2 px-4 rounded bg-red-500 hover:bg-red-600"
                onClick={() => setFilters({ search: '', status: FILTER_STATUS.all })}
              >
                Limpiar
              </button>
            </div>
          </div>


          <hr className="my-4 border-slate-400" />


          {/* List */}

          <h2 className="text-xl font-semibold mb-4">
            Tareas&nbsp;
            {
              filters.status === FILTER_STATUS.complete ? 'Completadas'
                : filters.status === FILTER_STATUS.pending ? 'Pendientes'
                : 'Totales'
            }
          </h2>

          <ul className="h-52 flex flex-col gap-2 overflow-y-auto">
            {/* Item list */}
            { todosFiltred.length === 0 ? (
              <li className="text-center">No hay tareas</li>
            ) : (
              todosFiltred.map((item) => (
                <li
                  key={item.id}
                  className={`
                    flex items-center justify-between gap-4 bg-slate-300 p-2 rounded
                    cursor-pointer border hover:border-slate-500
                    ${removingTodo === item.id ?  'animate-fade-out-up' : 'animate-fade-in-up'}
                  `}
                  onClick={() => handleCompleteTodo(item.id)}
                >
                  <input
                    readOnly
                    type="checkbox"
                    checked={item.done}
                  />

                  <span className={`grow ${item.done ? 'line-through' : ''}`}>
                    { item.description }
                  </span>
  
                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      className="p-1 rounded-md bg-blue-500 hover:bg-blue-700"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleEditTodo(item)
                      }}
                    >
                      <IoPencil size={20} className="text-white" />
                    </button>
                    <button
                      className="p-1 rounded-md bg-red-500 hover:bg-red-600"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleDeleteTodo(item.id)
                      }}
                    >
                      <IoTrash size={20} className="text-white" />
                    </button>
                  </div>
                </li>
              ))  
            )}
          </ul>
        </div>
      </section>
    </div>
  )
}
