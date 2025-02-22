import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required')
});

export default function ContactForm() {
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-2xl mx-auto space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <Field 
              name="name" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
            <ErrorMessage 
              name="name" 
              component="div" 
              className="text-red-500 text-sm mt-1" 
            />
          </div>

          {/* Repeat similar structure for email and message fields */}

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </Form>
      )}
    </Formik>
  );
}