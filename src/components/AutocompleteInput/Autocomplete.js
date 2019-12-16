import React from "react";

const Autocomplete = ({ onChange, onClick, onKeyDown, data }) => {
  const { filteredSuggestions, showSuggestions, value } = data;

  let suggestionsListComponent;

  if (showSuggestions && value) {
    if (filteredSuggestions.length) {
      suggestionsListComponent = (
        <ul>
          {filteredSuggestions.map(({ country, code }) => {
            return (
              <li key={code} onClick={onClick}>
                {country}
              </li>
            );
          })}
        </ul>
      );
    } else {
      suggestionsListComponent = (
        <div>
          <em>No suggestions</em>
        </div>
      );
    }
  }

  return (
    <>
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
      />
      {suggestionsListComponent}
    </>
  );
};

export default Autocomplete;
