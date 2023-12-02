import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { CustomInputProps } from "../../types";
import { FieldError, useFormContext } from "react-hook-form";

export const CountryAutocompleteHooks = ({
  label,
  name,
  type,
}: CustomInputProps) => {
  const countries = useSelector((state: RootState) => state.country);
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const {
    formState: { errors: hookFormErrors },
    setValue,
    register,
  } = useFormContext();
  const errorMessage = (hookFormErrors[name] as FieldError)?.message;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    // Фильтруем предложения на основе введенного значения
    const filtered = countries.country.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredSuggestions(filtered);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setFilteredSuggestions([]);
    setValue("country", suggestion);
  };

  return (
    <div>
      <label htmlFor={name}>{label}:</label>
      <input
        {...register(name)}
        type={type}
        name={name}
        value={inputValue}
        onChange={handleInputChange}
      />
      <span>{errorMessage}</span>
      <ul id="country">
        {filteredSuggestions.map((suggestion) => (
          <li
            key={suggestion}
            onClick={() => handleSuggestionClick(suggestion)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryAutocompleteHooks;
