import PropTypes from 'prop-types';

import { Button } from '../../../components';

export const FormAddTodo = ({
  value = '',
  isEditing ,
  onChange,
  onCancelEdit,
  onSubmit,
}) => {
  return (
    <form className="flex flex-wrap gap-3 md:flex-nowrap" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Agregar nueva tarea"
        className="h-10 grow px-4 rounded-md focus:outline-blue-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <Button
        type="submit"
        className="font-semibold uppercase md:w-28"
      >
        { isEditing ? 'Editar' : 'Agregar' }
      </Button>
      { isEditing && (
        <Button
          type="button"
          className="font-semibold uppercase bg-red-500 hover:bg-red-700 md:w-28 "
          onClick={onCancelEdit}
        >
          Cancelar
        </Button>
      ) }
    </form>
  )
}

FormAddTodo.propTypes = {
  value: PropTypes.string,
  isEditing: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onCancelEdit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}