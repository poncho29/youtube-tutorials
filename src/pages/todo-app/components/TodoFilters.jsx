import PropTypes from 'prop-types';

import { FILTER_STATUS } from '../utils';

import { Button } from '../../../components';

export const TodoFilters = ({
  filters,
  onChangeFilters
}) => {
  return (
    <div className="my-4">
      <input
        type="text"
        placeholder="Buscar"
        className="w-full p-2 mb-2 rounded-md focus:outline-blue-500"
        value={filters.search}
        onChange={(e) => onChangeFilters({ ...filters, search: e.target.value })}
      />

      <div
        className="flex flex-wrap justify-between gap-2 sm:flex-nowrap"
      >
        <Button
          className="font-semibold uppercase"
          onClick={() => onChangeFilters({ ...filters, status: FILTER_STATUS.all })}
        >
          Todas
        </Button>

        <Button
          className="font-semibold uppercase bg-green-500 hover:bg-green-600"
          onClick={() => onChangeFilters({ ...filters, status: FILTER_STATUS.complete })}
        >
          Completadas
        </Button>

        <Button
          className="font-semibold uppercase bg-orange-500 hover:bg-orange-600"
          onClick={() => onChangeFilters({ ...filters, status: FILTER_STATUS.pending })}
        >
          Pendientes
        </Button>
        
        <Button
          className="font-semibold uppercase bg-red-500 hover:bg-red-600"
          onClick={() => onChangeFilters({ search: '', status: FILTER_STATUS.all })}
        >
          Limpiar
        </Button>
      </div>
    </div>
  )
}

TodoFilters.propTypes = {
  filters: PropTypes.shape({
    search: PropTypes.string,
    status: PropTypes.string
  }),
  onChangeFilters: PropTypes.func.isRequired
}
