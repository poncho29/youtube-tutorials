import { IoTrash, IoPencil  } from "react-icons/io5";

const text = 'Tarea Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor unde architecto reiciendis, sunt quam quibusdam mollitia accusamus hic assumenda quos qui consequuntur quisquam quod esse quas odio, rerum exercitationem repellat.';

export const TodoApp = () => {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center p-2"
    >
      <section className="w-[520px] h-auto p-4 rounded-md bg-slate-200 shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-4">TODO APP</h1>

        {/* Form */}
        <form>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Agregar nueva tarea"
              className="grow px-4 rounded-md focus:outline-blue-500"
            />

            <button
              type="submit"
              className="text-white font-semibold uppercase py-2 px-4 rounded bg-blue-500 hover:bg-blue-700"
              onClick={() => {}}
            >
              Agregar
            </button>
          </div>

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
            <li
              className="flex items-center justify-between gap-4 bg-slate-300 p-2 rounded cursor-pointer
              transition-all duration-300 hover:scale-110 hover:shadow-xl "
            >
              <span className="grow">
                { text.substring(0, 52) }...
                
              </span>

              {/* Actions */}
              <div className="flex gap-2">
                <button
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
          </ul>
          
        </form>
      </section>
    </div>
  )
}
