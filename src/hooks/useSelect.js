import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";

export const useSelect = (settings) => {
  let value = settings.initialValue;
  if (settings.initialValue === undefined) value = "";

  const [input, setInput] = useState({
    value: value,
    isValid: true,
    wasTouched: false,
    isInitialRun: true,
  });

  const onChangeHandler = (evt) => {
    setInput((prevState) => {
      return {
        ...prevState,
        value: evt.target.value,
        isInitialRun: false,
      };
    });
  };

  const onBlurHandler = (evt) => {
    setInput((prevState) => {
      return {
        ...prevState,
        wasTouched: true,
        isInitialRun: false,
      };
    });

    if (settings.onblur) settings.onblur(evt);
  };

  return {
    options: settings.options || [],
    value: input.value,
    defaultValue: settings.options[0].value,
    isValid: input.isValid,
    wasTouched: input.wasTouched,
    onChangeHandler,
    onBlurHandler,
    label: settings.label || "",
    id: nanoid(),
  };
};
