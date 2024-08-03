import { useState } from "react";

import { Formik } from "formik";

import { ControlButtons, StepOne, StepTwo } from "./components";

const INITIAL_FORM = {
  fullname: '',
  email: '',
  username: '',
  phone: '',
  password: '',
  confirmPassword: '',
  country: '',
  city: '',
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
        {({ handleSubmit }) => (
          <form
            className="w-full max-w-lg p-4 rounded-xl bg-slate-200"
            onSubmit={handleSubmit}
          >

            <h1 className="text-2xl font-bold text-center uppercase mb-4">
              Formulario de Registro
            </h1>

            {currentStep === 1 && <StepOne />}

            {currentStep === 2 && <StepTwo />}

            <ControlButtons
              currentStep={currentStep}
              onChangeStep={setCurrentStep}
            />
          </form>
        )}
      </Formik>
    </div>
  )
}
