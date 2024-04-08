import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
    firstname: Yup.string().required('Veuillez remplir ce champ'),
    lastname: Yup.string().required('Veuillez remplir ce champ'),
    email: Yup.string()
        .email('Veuillez entrer une adresse email valide')
        .required('Veuillez remplir ce champ'),
})
