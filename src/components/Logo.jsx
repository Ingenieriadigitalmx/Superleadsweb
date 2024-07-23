import styled from 'styled-components';

export const LogoDesktop = styled.img`
  display: none;
  margin-right: 1rem; // Puedes ajustar según tus necesidades

  @media (min-width: 900px) { // md breakpoint in Material-UI is 960px
    display: flex;
    width: 100%;
    max-width: 222px;
  }
`;
export const LogoMovil = styled.img`
  display: flex;
  width: 100%;
  max-width: 24.86px;

  @media (min-width: 900px) { // md breakpoint in Material-UI is 960px
    display: none;
  }
`;
export const TipograiaSuperLeads = styled.img`
  display: flex;
  width: 100%;
  max-width: 95.23px;
  flex-grow: 1;

  @media (min-width: 900px) { // md breakpoint in Material-UI is 960px
    display: none;
  }
`;
