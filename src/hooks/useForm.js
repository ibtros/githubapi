import { useState } from 'react';

// Custom hook that is useful to handle input changes in a general way
export const useForm = ( initialState = {} ) => {
    
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues( initialState );
  };

  const handleInputChange = ({ target }) => {
    // Change only the necessary values
    setValues({
      ...values,
      [ target.name ]: target.value
    });
  };

  return [ values, handleInputChange, reset ];

}