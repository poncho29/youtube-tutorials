import PropTypes from 'prop-types';

export const ControlButtons = ({
  currentStep,
  onChangeStep,
}) => {
  return (
    <section className="w-full flex justify-between gap-4 mt-4">
      {currentStep > 1 && (
        <button
          type="button"
          className="w-full p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
          onClick={() => onChangeStep(currentStep - 1)}
        >
          Atras
        </button>
      )}

      <button
        type={currentStep === 3 ? 'submit' : 'button'}
        className="w-full p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
        onClick={() => currentStep < 3 ? onChangeStep(currentStep + 1) : {}}
      >
        {currentStep === 3 ? 'Enviar' : 'Siguiente'}
      </button>
    </section>
  )
}

ControlButtons.propTypes = {
  currentStep: PropTypes.number.isRequired,
  onChangeStep: PropTypes.func.isRequired
}