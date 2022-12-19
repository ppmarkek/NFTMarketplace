import * as yup from 'yup';

export const registrationSchema = yup.object({
    username: yup.string().required('Заполните поле'),
    email: yup.string().required('Заполните поле'),
    password: yup.string().min(8, 'Минимум 8 символов').required('Заполните поле'),
    passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Пароль не совподает')
});