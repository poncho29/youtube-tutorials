import { useState } from "react";

import { Formik } from "formik";

import { StepOne, StepTwo } from "./components";

const INITIAL_FORM = {
  fullname: '',
  email: '',
  username: '',
  phone: '',
  password: '',
  confirmPassword: '',
  country: undefined,
  city: undefined,
  address: '',
  zipCode: '',
  cardNumber: '',
  cvv: '',
  expirationDate: '',
  terms: false,
  accpetsEmails: false
}

export const StepsForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div
      className="w-full flex flex-col items-center justify-center p-4 pt-10"
    >
      <Formik
        initialValues={INITIAL_FORM}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {({ isValid, handleSubmit }) => (
          <form
            className="w-full max-w-lg p-4 rounded-xl bg-slate-200"
            onSubmit={handleSubmit}
          >

            <h1 className="text-2xl font-bold text-center uppercase mb-4">
              Formulario de Registro
            </h1>

            {currentStep === 1 && <StepOne />}

            {currentStep === 2 && <StepTwo />}

            <section className="w-full flex justify-between gap-4 mt-4">
              {currentStep > 1 && (
                <button
                  type="button"
                  className="w-full p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  Atras
                </button>
              )}

              <button
                type="button"
                className={`
                  w-full p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600
                  ${isValid && 'opacity-50'}
                `}
                onClick={() => setCurrentStep(currentStep + 1)}
              >
                Siguiente
              </button>
            </section>
          </form>
        )}
      </Formik>
    </div>
  )
}
