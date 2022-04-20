import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm } from './useForm';

const Component = ({ onSubmitModule }: any) => {
  const { formState, onChange, handleSubmit } = useForm({
    initialValues: {
      email: '',
    },
    onSubmit: onSubmitModule,
  });

  return (
    <form role="form" onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        value={formState.email}
        placeholder='Insira seu E-mail'
        onChange={onChange}
        autoComplete="off"
      />
      <button type="submit">Assinar Newsletter</button>
    </form>
  );
}


describe('useForm()', () => {
  describe('when content changes', () => {
    it('updates it values', () => {
      render(<Component />);
      
      const input = screen.getByRole('textbox');
      const typedText = 'johndoe@email.com';
      
      userEvent.type(input, 'johndoe@email.com');
      
      expect(input).toHaveValue(typedText);
    });
  });
  
  describe('when form is submitted', () => {
    it('calls onSubmit with form values', () => {
      const onSubmitMock = jest.fn();
      
      render(<Component onSubmitModule={onSubmitMock} />);
      
      const input = screen.getByRole('textbox');
      const submitButton = screen.getByRole('button');
      const typedText = 'johndoe@email.com';
      
      userEvent.type(input, typedText);
      userEvent.click(submitButton);
      
      expect(onSubmitMock).toHaveBeenCalledWith({ email: typedText });
      expect(onSubmitMock).toHaveBeenCalledTimes(1);
    });
  });
});