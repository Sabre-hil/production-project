import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

const ErrorButton = () => {
  const [errorState, setErrorState] = useState(false);

  useEffect(() => {
    if (errorState) {
      throw new Error();
    }
  }, [errorState]);

  const toggleError = () => {
    setErrorState(!errorState);
  };

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <Button onClick={toggleError}>Вызвать ошибку</Button>
  );
};

export default ErrorButton;
