'use client';

import { Field, ErrorMessage } from 'formik';

interface InputFieldProps {
  name: string;
  placeholder: string;
  extraStyles?: string;
  isMessage?: boolean;
  type?: string;
}

const InputField = ({
  name,
  placeholder,
  isMessage,
  extraStyles,
  type,
}: InputFieldProps) => {
  return (
    <div>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        as={isMessage && 'textarea'}
        className={`w-full px-[20px] py-[10px] sm:py-[20px] text-lg placeholder-darkColor/60 bg-whiteColor border border-darkColor ${extraStyles}`}
      />
      <ErrorMessage name={name} component='div' />
    </div>
  );
};

export default InputField;
