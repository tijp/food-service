import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, FormikActions } from 'formik';
import { History } from 'history';
import * as Yup from 'yup';

import firebase from 'firebase/app';
import 'firebase/firestore';

import Section from '../../components/Styled/Section';
import Button from '../../components/Button';
import { FormInput, FormTextarea } from './FormInput';
import PickupTimes from './PickupTimes';
import { getBasketTotalPrice, getBasketItems } from '../../stores/basket/reducer';
import FinishedCheckout from './FinishedCheckout';
import { ClearBasket } from '../../stores/basket/actions';
import { Dispatch } from 'redux';

// Validation strings
const REQUIRED_MESSAGE = 'Dit veld is verplicht';
const EMAIL_INVALID = 'E-mailadres is onjuist';
const MOBILE_INVALID = 'Mobiele nummer is onjuist';

interface IProps {
  basket: BasketItem[],
  basketTotalPrice: string;
  history: History;
  clearBasket(): void;
};

export interface CheckoutFormValues {
  firstName: string;
  infix: string;
  lastName: string;
  email: string;
  mobile: string;
};

const initialFormValues = {
  firstName: '',
  infix: '',
  lastName: '',
  email: '',
  mobile: '',
};

const formValidationScheme = Yup.object().shape({
  firstName: Yup.string().required(REQUIRED_MESSAGE),
  lastName: Yup.string().required(REQUIRED_MESSAGE),
  email: Yup.string().email(EMAIL_INVALID).required(REQUIRED_MESSAGE),
  mobile: Yup.string().matches(/^(((\+31|0|0031)6){1}[1-9]{1}[0-9]{7})$/i, MOBILE_INVALID),
});

const Checkout: React.SFC<IProps> = ({ basket, basketTotalPrice, history, clearBasket }) => {
  if (basket.length === 0)
    history.push('/');

  const [finishedCheckout, setFinishedCheckout] = useState(false);
  if (finishedCheckout)
    return <FinishedCheckout />

  const handleSubmit = (values: CheckoutFormValues, { setSubmitting }: FormikActions<CheckoutFormValues>) => {
    // Add order to firestore
    const db = firebase.firestore();
    db.collection('orders').add({ completed: false, ...values })
      .then(docRef => console.log('Document written with ID: ', docRef.id))
      .catch(error => console.error('Error adding document: ', error));

    alert('Bestelling ontvangen! U ontvangt zo snel mogelijk bericht.');
    setSubmitting(false);
    setFinishedCheckout(true);
    window.scrollTo(0, 0);
    clearBasket();
  };

  return (
    <Section title="Bestellen">
      <Formik
        initialValues={initialFormValues}
        onSubmit={handleSubmit}
        validationSchema={formValidationScheme}
      >
        {props => {
          const requiredFormikProps = (({ touched, errors }) => ({ touched, errors }))(props);

          return (
            <Form>
              <h3>Bestelling ophalen</h3>
              {/* <PickupTimes /> */}
              <p>Geef in de opmerkingen beneden aan wanneer u de bestelling zou willen ophalen.</p>
              <p>Helaas kan ik niet bezorgen.</p>

              {/* <br />
              <a>link naar maps route in new tab</a> */}

              <br /><br />
              <h3>Persoonlijke gegevens</h3>
              <FormInput id="firstName" label="Voornaam" required {...requiredFormikProps} />
              <FormInput id="infix" label="Tussenvoegsel" {...requiredFormikProps} />
              <FormInput id="lastName" label="Achternaam" required {...requiredFormikProps} />
              <FormInput id="email" label="E-mail" type="email" required {...requiredFormikProps} />
              <FormInput id="mobile" label="Mobiel" {...requiredFormikProps} />

              <h3>Bestelling</h3>
              <FormTextarea id="remarks" label="Opmerkingen" {...requiredFormikProps} />

              <br />
              <h4>Totale prijs</h4>
              <h3>€{basketTotalPrice}</h3>
              <Button type="submit">Bestelling plaatsen</Button>
            </Form>
          );
        }}
      </Formik>
    </Section>
  );
};

const mapStateToProps = (state: RootState) => ({
  basket: getBasketItems(state),
  basketTotalPrice: getBasketTotalPrice(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  clearBasket: () => dispatch(new ClearBasket()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
