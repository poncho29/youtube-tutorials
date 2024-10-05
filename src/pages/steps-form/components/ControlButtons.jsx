import PropTypes from 'prop-types';

import { Button, Spinner } from '../../../components';

export const ControlButtons = ({
  isValid,
  isLoading,
  currentStep,
  onChangeStep,
  onSubmit
}) => {
  return (
    <section className="w-full flex justify-between gap-4 mt-8">
      {currentStep > 1 && (
        <Button
          disabled={isLoading}
          onClick={() => onChangeStep(currentStep - 1)}
        >
          Atras
        </Button>
      )}

        <Button
          disabled={!isValid || isLoading}
          className="flex justify-center"
          onClick={() => currentStep < 3 ? onChangeStep(currentStep + 1) : onSubmit()}
        >
          {currentStep < 3 ? 'Siguiente'
            : isLoading ? <Spinner /> : 'Enviar'
          }
        </Button>
    </section>
  )
}

ControlButtons.propTypes = {
  isValid: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  currentStep: PropTypes.number.isRequired,
  onChangeStep: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}