import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";

const defaultValidation = () => true;

export const useInput = (settings) => {
  const validate = settings.validate || defaultValidation;

  let value = settings.initialValue;
  if (settings.initialValue === undefined) value = "";

  const [input, setInput] = useState({
    value: value,
    isValid: settings.validate ? false : true,
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

  const onIputBlurHandler = (evt) => {
    setInput((prevState) => {
      return {
        ...prevState,
        wasTouched: true,
        isInitialRun: false,
      };
    });

    if (settings.onblur) settings.onblur(evt);
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
      clearTimeout(id);
    };
  }, [validate, input.value, input.isInitialRun]);

  return {
    value: input.value,
    isValid: input.isValid,
    wasTouched: input.wasTouched,
    onInputChangeHandler,
    onIputBlurHandler,
    label: settings.label || "",
    id: nanoid(),
  };
};
