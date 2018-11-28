import React from 'react';
import { Formik, Form, FormikActions } from 'formik';
import * as Yup from 'yup';

import Section from '../../components/Styled/Section';
import Button from '../../components/Button';
import { FormInput, RequiredFormInput, FormTextarea } from './FormInput';
import PickupTimes from './PickupTimes';

export interface CheckoutFormValues {
  firstName: string;
  infix: string;
  lastName: string;
  email: string;
}

const Checkout = () => (
  <Section>
    <h1>Checkout</h1>

    <Formik
      initialValues={{
        firstName: '',
        infix: '',
        lastName: '',
        email: '',
      }}
      onSubmit={(values: CheckoutFormValues, { setSubmitting }: FormikActions<CheckoutFormValues>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email().required('Required'),
      })}
    >
      {props => {
        const requiredFormikProps = (({ touched, errors }) => ({ touched, errors }))(props);

        return (
          <Form>
            <h3>Pickup Order</h3>
            <PickupTimes />

            <br />
            <a>directions</a>

            <br /><br />
            <h3>Personal Data</h3>
            <RequiredFormInput id="firstName" label="Voornaam" {...requiredFormikProps} />
            <FormInput id="infix" label="Tussenvoegsel" />
            <RequiredFormInput id="lastName" label="Achternaam" {...requiredFormikProps} />

            <p>Your email will be used to inform you about order updates.</p>
            <RequiredFormInput id="email" label="Email" type="email" {...requiredFormikProps} />

            <FormTextarea id="remarks" label="Opmerkingen" />

            <Button type="submit" text="Submit" />
          </Form>
        );
      }}
    </Formik>
  </Section>
);

export default Checkout;
