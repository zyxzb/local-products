import * as Yup from 'yup';

export const contactFormSchema = Yup.object().shape({
  name: Yup.string().required('Pole imię jest wymagane'),
  email: Yup.string()
    .required('Pole email jest wymagane')
    .email('Nieprawidłowy adres email'),
  message: Yup.string().required('Pole wiadomość jest wymagane'),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string().required('Pole imię jest wymagane'),
  email: Yup.string()
    .required('Pole email jest wymagane')
    .email('Nieprawidłowy adres email'),
  password: Yup.string().required('Hasło jest wymagane'),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Pole email jest wymagane')
    .email('Nieprawidłowy adres email'),
  password: Yup.string().required('Hasło jest wymagane'),
});

export const adSchema = Yup.object().shape({
  title: Yup.string()
    .required('Tytuł jest wymagany')
    .min(10, 'min. 10 znaków')
    .max(55, 'max. 55 znaków'),
  desc: Yup.string()
    .required('Krótki opis jest wymagany')
    .max(160, 'max. 160 znaków'),
  location: Yup.string().required('Lokalizacja jest wymagana'),
  content: Yup.string().required('Treść jest wymagana'),
});
