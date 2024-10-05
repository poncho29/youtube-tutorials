import { useState } from "react";

import { Formik } from "formik";

import { getValidationSchema, handleErrors, INITIAL_VALUES } from "./formHelper";

import { ControlButtons, StepOne, StepTwo, StepThree } from "./components";
import { PageWrapper } from "../../components";

export const StepsForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Function to change steps in the form
   * @param { function } validateForm - Formik validation function
   * @param { function } setTouched - Formik setTouched function
   * @param { number } step - Form step number
   * @returns void
   */
  const handleChangeStep = async (validateForm, setTouched, step) => {
    // Return to previous step
    if (step < currentStep) {
      setCurrentStep(step);
      const errors = await validateForm();
      handleErrors(errors, setTouched);
      return;
    }

    const errors = await validateForm();
  
    // If there are no errors, proceed to the next step.
    if (Object.keys(errors).length === 0) {
      setCurrentStep(step);
    } else {
      handleErrors(errors, setTouched);
    }
  };

  return (
    <PageWrapper>
      <div
        className="w-full flex flex-col items-center justify-center p-4 pt-10"
      >
        <Formik
          initialValues={INITIAL_VALUES}
          validationSchema={getValidationSchema(currentStep)}
          onSubmit={(values, action) => {
            setIsLoading(true);

            setTimeout(() => {
              setIsLoading(false);
              console.log(JSON.stringify(values, null, 2));
              action.resetForm();
              setCurrentStep(1);
            }, 1000);
          }}
        >
          {({ isValid, setTouched , handleSubmit, validateForm }) => (
            <form className="w-full max-w-lg p-4 rounded-xl bg-slate-200">

              <h1 className="text-2xl font-bold text-center uppercase mb-4">
                Formulario de Registro
              </h1>

              {currentStep === 1 && <StepOne />}

              {currentStep === 2 && <StepTwo />}

              {currentStep === 3 && <StepThree />}

              <ControlButtons
                isValid={isValid}
                isLoading={isLoading}
                currentStep={currentStep}
                onSubmit={handleSubmit}
                onChangeStep={(step) => handleChangeStep(validateForm, setTouched, step)}
              />
            </form>
          )}
        </Formik>
      </div>
    </PageWrapper>
  )
}
