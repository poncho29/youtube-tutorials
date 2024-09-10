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
    <form className="flex gap-3" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Agregar nueva tarea"
        className="grow px-4 rounded-md focus:outline-blue-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <Button
        type="submit"
        className="w-32 font-semibold uppercase"
      >
        { isEditing ? 'Editar' : 'Agregar' }
      </Button>
      { isEditing && (
        <Button
          type="button"
          className="uppercase bg-red-500 hover:bg-red-700"
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