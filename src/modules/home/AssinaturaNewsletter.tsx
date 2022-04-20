import React from 'react';
import styled from 'styled-components';
import { Button, Input } from '@/components/index';
import { useForm } from '@/components/forms';
import { useSendNewsletter } from './newsletter.store';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email('E-mail inválido'),
});

export const AssinaturaNewsletter = () => {
  const { mutate: sendNewsletter } = useSendNewsletter({
    onSuccess: () => { 
      alert('Assinatura realizada com sucesso!');
    }
  });
  const { formState, onChange, handleSubmit } = useForm({
    initialValues: { email: '' },
    onSubmit: ({ email }) => sendNewsletter(email),
    validateSchema: async (values) => schema.validate(values, { abortEarly: false })
  });
  
  return (
    <Wrapper>
      <Container>
        <div>
          <h1>
            Sua casa com as 
            <br />
            <strong>
              melhores <br /> plantas
            </strong>
          </h1>
          <p>
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
          </p>
        </div>
        
        <Form onSubmit={handleSubmit}>
          <FieldGroup>
            <Input
              name="email"
              type="email"
              value={formState.email}
              placeholder='Insira seu E-mail'
              onChange={onChange}
              autoComplete="off"
            />
            <Button type="submit">
              Assinar Newsletter
            </Button>
          </FieldGroup>
        </Form>
      </Container>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-color: #ffe29a;
  padding: 16px;
  margin-top: 16px;
  position: relative;
  
  @media (min-width: 920px) {
    background-color: transparent;
    margin-top: 155px;
    
    &:after {
      content: "";
      display: block;
      width: 787px;
      height: 975px;
      background-image: url('/images/hero-image.png');
      position: absolute;
      --baseDistance: -287px;
      top: calc(var(--baseDistance) + 50px);
      right: 0;
      z-index: -1;
      pointer-events: none;
    }
  }
`;

export const Container = styled.div`
  max-width: 585px;
  
  div {
    max-width: 461px;
    margin-bottom: 32px;
  }
  
  h1 {
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 24px;
  }
  
  h1 strong {
    font-family: Elsie Swash Caps;
    font-size: 50px;
    font-style: normal;
    font-weight: 900;
    line-height: 1;
    letter-spacing: 0em;
    text-align: left;
    
    @media (min-width: 920px) {
      font-size: 82px;
    }
  }
  
  p {
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 16px;
  }
`;

export const Form = styled.form`
  input[type='email'] {
    padding: 27px;
    padding-left: 55px;
  }
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 920px) {
    flex-direction: row;
    
    button {
      width: initial;
    }
  }
`;