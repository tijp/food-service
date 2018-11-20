import React from 'react';
import styled from 'styled-components';

const MapsWrapper = styled.div`
  height: 550px;
  overflow: hidden;
  border-radius: 8px;
  transform: translateZ(0);
`;

const StyledGoogleMaps = styled.iframe`
  border: none;
`;

const GoogleMaps = () => (
  <MapsWrapper>
    <StyledGoogleMaps
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2455.8623039203467!2d5.082216050809711!3d52.00938698159746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6646fb208bd2b%3A0x8d0b87ff9696d282!2sHenri+Dunantlaan+35%2C+3434+CJ+Nieuwegein%2C+Netherlands!5e0!3m2!1sen!2suk!4v1541599003292"
      width="100%"
      height="550"
      allowFullScreen
    />
  </MapsWrapper>
);

export default GoogleMaps;