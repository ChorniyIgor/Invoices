import { useEffect, useState } from "react";

export const useInput = (settings) => {
  const { validate } = settings;

  const [input, setInput] = useState({
    value: "",
    isValid: false,
    wasTouched: false,
    isInitialRun: true,
  });

  const onInputChangeHandler = (evt) => {
    setInput((prevState) => {
      return {
        ...prevState,
        value: evt.target.value,
        isInitialRun: false,
      };
    });
  };

  const onIputBlurHandler = () => {
    setInput((prevState) => {
      return {
        ...prevState,
        wasTouched: true,
        isInitialRun: false,
      };
    });
  };

  useEffect(() => {
    const id = setTimeout(() => {
      if (!input.isInitialRun) {
        setInput((prevState) => {
          return {
            ...prevState,
            isValid: validate(prevState.value),
          };
        });
      }
    }, 300);

    return () => {
      console.log(id);
      clearTimeout(id);
    };
  }, [validate, input.value, input.isInitialRun]);

  return {
    value: input.value,
    isValid: input.isValid,
    wasTouched: input.wasTouched,
    onInputChangeHandler,
    onIputBlurHandler,
    label: settings.label,
  };
};
