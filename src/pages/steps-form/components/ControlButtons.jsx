import PropTypes from 'prop-types';

export const ControlButtons = ({
  isValid,
  currentStep,
  onChangeStep,
}) => {
  console.log(isValid)
  return (
    <section className="w-full flex justify-between gap-4 mt-8">
      {currentStep > 1 && (
        <button
          type="button"
          className="w-full p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
          onClick={() => onChangeStep(currentStep - 1)}
        >
          Atras
        </button>
      )}

      {currentStep < 3 ? (
        <button
          type="button"
          disabled={!isValid}
          className={`w-full p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 ${!isValid && 'opacity-50'}`}
          onClick={() => onChangeStep(currentStep + 1)}
        >
          Siguiente
        </button>
      ) : (
        <button
          type="submit"
          disabled={!isValid}
          className={`w-full p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 ${!isValid && 'opacity-50'}`}
        >
          Enviar
        </button>
      )}
    </section>
  )
}

ControlButtons.propTypes = {
  isValid: PropTypes.bool.isRequired,
  currentStep: PropTypes.number.isRequired,
  onChangeStep: PropTypes.func.isRequired,
}