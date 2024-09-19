import * as Yup from 'yup';

// Validation schema using Yup
const bookValidationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  author: Yup.string().required('Author is required'),
  year: Yup.number()
    .required('Year is required')
    .min(1900, 'Year must be greater than 1900')
    .max(new Date().getFullYear(), 'Year cannot be in the future'),
  genre: Yup.string().required('Genre is required')
});

export default bookValidationSchema;
