import { useState } from 'react';

type FormProps = {
  initialValues: {
    [key: string]: any;
  },
  onSubmit: (values: { [key: string]: any }) => void;
}

export const useForm = ({ onSubmit, initialValues }: FormProps) => {
  const [formState, setFormState] = useState(initialValues);
  
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
    const { name, value } = event.target;
    
    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();
    onSubmit(formState);
  }
  
  return {
    onChange,
    handleSubmit,
    formState
  }
};