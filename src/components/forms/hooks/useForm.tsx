import { useState, useEffect } from 'react';

type FormProps = {
  initialValues: {
    [key: string]: any;
  },
  onSubmit: (values: { [key: string]: any }) => void;
  validateSchema?: (values: { [key: string]: any }) => void;
}

function formatErrors(yupErrorsInner = []) {
  return yupErrorsInner?.reduce((errorObjectAcc, currentError) => {
    const fieldName = currentError.path
    const errorMessage = currentError.message
    return {
      ...errorObjectAcc,
      [fieldName]: errorMessage,
    }
  }, {})
}


export const useForm = ({ onSubmit, initialValues, validateSchema }: FormProps) => {
  const [formState, setFormState] = useState(initialValues);
  const [errors, setErrors] = useState({});
  
  async function validateValues(currentValues: any) {
    try {
      if (validateSchema) await validateSchema(currentValues)
      setErrors({})
    } catch (err) {
      const formatedErrors = formatErrors(err.inner)
      setErrors(formatedErrors)
    }
  }

  useEffect(() => {
    validateValues(formState).catch(console.log)
  }, [formState]);
  
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
    formState,
    errors,
  }
};