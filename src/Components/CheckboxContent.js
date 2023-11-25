// CheckboxContext.js
import React, { createContext, useState } from 'react';

export const CheckboxContext = createContext();

export const CheckboxProvider = ({ children }) => {
  const [isCheckedFriday, setCheckedFriday] = useState(false);
  const [isCheckedSaturday, setCheckedSaturday] = useState(false);
  const [isCheckedSunday, setCheckedSunday] = useState(false);

  return (
    <CheckboxContext.Provider value={{ isCheckedFriday, setCheckedFriday, isCheckedSaturday, setCheckedSaturday, isCheckedSunday, setCheckedSunday }}>
      {children}
    </CheckboxContext.Provider>
  );
};
