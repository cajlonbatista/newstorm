import styled from "vue-styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background: ${props => props.theme.primary};
  padding: 15px 23px;
  img{
    width: 45px;
  }
`;
