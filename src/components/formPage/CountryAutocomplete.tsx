import React, { ForwardedRef, forwardRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { CustomInputProps } from "../../types";

export const CountryAutocomplete = forwardRef(
  (
    { label, name, type, errors }: CustomInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const countries = useSelector((state: RootState) => state.country);
    const [inputValue, setInputValue] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>(
      [],
    );

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
    };

    return (
      <div>
        <label htmlFor={name}>{label}:</label>
        <input
          type={type}
          name={name}
          value={inputValue}
          ref={ref}
          onChange={handleInputChange}
        />
        {errors && <span>{errors}</span>}
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
  },
);

export default CountryAutocomplete;
