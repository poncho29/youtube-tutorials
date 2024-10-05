import PropTypes from 'prop-types';

import { FILTER_STATUS } from '../utils';
import { IoPencil, IoTrash } from 'react-icons/io5';

export const ListTodos = ({
  todos = [],
  removingTodo,
  filters,
  onCompleteTodo,
  onEditTodo,
  onDeleteTodo
}) => {
  return (
    <>
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
            { todos.length === 0 ? (
              <li className="text-center">No hay tareas</li>
            ) : (
              todos.map((item) => (
                <li
                  key={item.id}
                  className={`
                    flex items-center justify-between gap-4 bg-slate-300 p-2 rounded
                    cursor-pointer border hover:border-slate-500 animate-duration-200
                    ${removingTodo === item.id ?  'animate-fade-out' : 'animate-fade-in'}
                  `}
                  onClick={() => onCompleteTodo(item.id)}
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
                        onEditTodo(item)
                      }}
                    >
                      <IoPencil size={20} className="text-white" />
                    </button>
                    <button
                      className="p-1 rounded-md bg-red-500 hover:bg-red-600"
                      onClick={(e) => {
                        e.stopPropagation()
                        onDeleteTodo(item.id)
                      }}
                    >
                      <IoTrash size={20} className="text-white" />
                    </button>
                  </div>
                </li>
              ))  
            )}
          </ul>
    </>
  )
}

ListTodos.propTypes = {
  todos: PropTypes.array.isRequired,
  removingTodo: PropTypes.string,
  filters: PropTypes.shape({
    search: PropTypes.string,
    status: PropTypes.string
  }),
  onCompleteTodo: PropTypes.func.isRequired,
  onEditTodo: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired
}
