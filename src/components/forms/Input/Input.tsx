import styled from 'styled-components';

type InputProps = {
  hasError?: boolean;
  isDisabled?: boolean;
  error?: string
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
  ...props
}: InputProps) => {
  const hasError = Boolean(error);
  const isFieldInvalid = hasError;
  
  return (
    <InputWrapper>
      <InputBase
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        hasError={hasError}
        {...props}
      />
      
      {isFieldInvalid && (
        <InputErrorMessage>{error}</InputErrorMessage>
      )}
    </InputWrapper>
  );  
}

const InputBase = styled.input<InputProps>`
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
  outline-color: ${({ hasError }) => hasError ? '#dc3545' : '#ffcb47'} ;
  box-shadow: 10px 10px 30px 0px #0000000f;
  border: 0;
  
  &:hover {
    box-shadow: 10px 10px 30px 0px #0000002e;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const InputErrorMessage = styled.span`
  margin-top: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #dc3545;
`;