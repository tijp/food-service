import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import Button from '../../components/Button';
import { Row } from '../../components/Styled/Layout';
import { withRouter, RouteComponentProps } from 'react-router';

interface IProps extends RouteComponentProps {
  showModal: boolean;
  closeModal(): void;
}

const AddedToCartModal: React.SFC<IProps> = ({ showModal, closeModal, history }) => {
  const goToBasket = () => {
    history.push('/winkelwagen');
    closeModal();
  }

  return (
    <StyledModal
      isOpen={showModal}
      onRequestClose={closeModal}
      style={modalStyles}
      ariaHideApp={false}
      contentLabel="Toegevoegd aan winkelwagen"
    >
      <Title>Toegevoegd aan winkelwagen</Title>
      <p>Wil je verder winkelen of naar bestellen gaan?</p>
      <br />

      <ButtonGroup>
        <Button small onClick={closeModal}>Verder winkelen</Button>
        <Button small onClick={goToBasket}>Naar bestellen</Button>
      </ButtonGroup>
    </StyledModal>
  );
}

const modalStyles = {
  overlay: {
    'backgroundColor': 'rgba(0,0,0,.5)',
    'padding': '0 10px',
  },
}

const StyledModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 0 auto;
  margin-top: 6%;

  padding: 20px 20px 10px 20px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0,0,0,.25);
`;

const Title = styled.h3`
  margin: 0;
`;

const ButtonGroup = styled(Row)`
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;

  & > button {
    margin-bottom: 10px;
  }
`;

export default withRouter(AddedToCartModal);
