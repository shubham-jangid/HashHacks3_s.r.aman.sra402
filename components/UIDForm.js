import { withFormik, Field, Form } from 'formik';
import * as Yup from 'yup';

const UUIDForm = ({ isSubmitting }) => (
  <Form>
    <label htmlFor="text">Address</label>
    <Field
      type="text"
      id="address"
      name="address"
      placeholder="Enter Address here..."
      required
    />
    {/* <label htmlFor="name"></label>
    {touched.name && errors.name && <FormError>{errors.name}</FormError>}
    <Field
      type="text"
      id="name"
      name="name"
      placeholder="Enter id here..."
      required
    /> */}
   
    <button disabled={!!isSubmitting} type="submit">
      Generate
    </button>
  </Form>
);

const FormikUUID = withFormik({
  mapPropsToValues() {},
  validationSchema: Yup.object().shape({
    address: Yup.string().required('Adddress is required.'),
  }),
  handleSubmit({ address }, { props, setErrors, setSubmitting }) {
    console.log('called')
        props
          .onSubmit({ address })
          .then((res) => {
            console.log(res)
            setSubmitting(false);
          })
          .catch((err) => {
            console.log(err)

            setErrors({ error: `Something Went wrong ${err}` });
            setSubmitting(false);
          });
      }
    }
)(UUIDForm);

export default FormikUUID;