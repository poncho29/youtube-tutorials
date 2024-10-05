import { useEffect, useMemo, useState } from "react";

import { FILTER_STATUS } from "./utils";

import { FormAddTodo, ListTodos, TodoFilters } from "./components";
import { PageWrapper } from "../../components";

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

  /**
   * Add Todo
   * @param { object } e - event object
   * @returns void
   */
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

  /**
   * Edit Todo
   * @param { object } todo 
   * @returns void
   */
  const handleEditTodo = (todo) => {
    setIsEditing(true);
    setEditTodo(todo);
    setNewTodo(todo.description);
  }

  /**
   * Cancel edit
   * @returns void
   */
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditTodo(null);
    setNewTodo('');
  }

  /**
   * Change Todo status to complete
   * @param { number } id - Todo id
   * @returns void
   */
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

  /**
   * Delete Todo
   * @param { number } id - Todo id
   * @returns void
   */
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
    <PageWrapper>
      <div
        className="w-full flex flex-col items-center justify-center px-4 py-10"
      >
        <section className="w-full h-full max-h-[728px] p-4 rounded-md bg-slate-200 shadow-lg sm:w-[520px] sm:h-[528px]">
          <h1 className="text-3xl font-bold text-center mb-4">TODO APP</h1>

          {/* Form */}
          <div>
            <FormAddTodo
              value={newTodo}
              isEditing={isEditing}
              onChange={setNewTodo}
              onCancelEdit={handleCancelEdit}
              onSubmit={handleAddTodo}
            />

            <hr className="my-4 border-slate-400" />

            <TodoFilters
              filters={filters}
              onChangeFilters={setFilters}
            />

            <hr className="my-4 border-slate-400" />

            <ListTodos
              todos={todosFiltred}
              removingTodo={removingTodo}
              filters={filters}
              onEditTodo={handleEditTodo}
              onDeleteTodo={handleDeleteTodo}
              onCompleteTodo={handleCompleteTodo}
            />
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}
