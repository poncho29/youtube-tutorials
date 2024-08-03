import { useState } from "react";

import { Formik } from "formik";

import { getValidationSchema, INITIAL_VALUES } from "./formHelper";

import { ControlButtons, StepOne, StepThree, StepTwo } from "./components";

export const StepsForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = (validateForm, setTouched) => {
    validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        setCurrentStep((prevStep) => prevStep + 1);
      } else {
        // Marcar todos los campos como tocados para mostrar los errores
        setTouched(Object.keys(errors).reduce((acc, key) => {
          acc[key] = true;
          return acc;
        }, {}));
      }
    });
  };

  return (
    <div
      className="w-full flex flex-col items-center justify-center p-4 pt-10"
    >
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={getValidationSchema(currentStep)}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2))
        }}
      >
        {({ isValid, setTouched , handleSubmit, validateForm }) => (
          <form
            className="w-full max-w-lg p-4 rounded-xl bg-slate-200"
            onSubmit={handleSubmit}
          >

            <h1 className="text-2xl font-bold text-center uppercase mb-4">
              Formulario de Registro
            </h1>

            {currentStep === 1 && <StepOne />}

            {currentStep === 2 && <StepTwo />}

            {currentStep === 3 && <StepThree />}

            <ControlButtons
              isValid={isValid}
              currentStep={currentStep}
              onChangeStep={(step) => {
                if (step < currentStep) {
                  setCurrentStep(step);
                } else {
                  handleNextStep(validateForm, setTouched);
                }
              }}
            />
          </form>
        )}
      </Formik>
    </div>
  )
}
