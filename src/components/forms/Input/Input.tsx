import styled from 'styled-components';

export const Input = styled.input`
  flex: 1;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  background-image: url("/images/icons/icon-mail.svg");
  background-repeat: no-repeat;
  background-position: 16px center;
  outline-color: #ffcb47;
  box-shadow: 10px 10px 30px 0px #0000000f;
  border: 0;
  
  &:hover {
    box-shadow: 10px 10px 30px 0px #0000002e;
  }
`;
