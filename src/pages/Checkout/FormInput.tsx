import React from 'react';
import { Field, FormikTouched, FormikErrors } from 'formik';
import styled from 'styled-components';
import { get } from 'lodash';

import { CheckoutFormValues } from '.';

const Container = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: .5em;
`;

const ValidationError = styled.div`
  color: red;
  margin-top: .25rem;
`;

const StyledField = styled(Field)`
  height: 36px;
  width: 100%;
  max-width: 260px;
  padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */
  background-color: #fff;
  border: 1px solid #D1D1D1;
  border-radius: 4px;
  box-shadow: none;
  box-sizing: border-box;

  /*
    Prop is a string because it is attached to the DOM.
    See issue: https://github.com/styled-components/styled-components/issues/439
  */
  border-color: ${props => props.haserror === 'true' ? 'red' : '#D1D1D1'};
`;

const StyledTextarea = styled(StyledField)`
  height: unset;
`;

interface FormInput {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  touched: FormikTouched<CheckoutFormValues>;
  errors: FormikErrors<CheckoutFormValues>;
}

export const FormInput: React.SFC<FormInput> = ({ id, label, type = 'text', required = false, errors, touched }) => {
  const hasError = get(errors, id) && get(touched, id);
  return (
    <Container>
      <Label htmlFor={id}>{label}{required && ' *'}</Label>
      <StyledField id={id} name={id} type={type} haserror={String(hasError)} />
      { hasError && <ValidationError>{get(errors, id)}</ValidationError> }
    </Container>
  );
};

export const FormTextarea: React.SFC<FormInput> = ({ id, label }) => (
  <Container>
    <Label htmlFor={id}>{label}</Label>
    <StyledTextarea id={id} name={id} component="textarea" rows={3} />
  </Container>
)
