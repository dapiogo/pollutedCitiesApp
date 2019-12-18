import React from "react";
import Form from "../Form/Form";
import NoResult from "../NoResult/NoResult";
import markerImg from "../../assets/img/marker.svg";
import style from "../AutocompleteInput/Autocomplete.module.scss";

const Autocomplete = ({ onChange, onClick, onKeyDown, onSubmit, data }) => {
  const { filteredSuggestions, showSuggestions, value, error} = data;

  let suggestionsListComponent;

  if (showSuggestions && value) {
    if (filteredSuggestions.length) {
      suggestionsListComponent = (
        <ul>
          {filteredSuggestions.map(({ country, code }) => {
            return (
              <li key={code} onClick={onClick}>
                <img src={markerImg} alt="marker"/>
                <p>{country}</p>
              </li>
            );
          })}
        </ul>
      );
    } else {
      suggestionsListComponent = <NoResult/>;
    }
  }

  return (
    <div className={style.wrapper}>
      <Form
        onSubmit={onSubmit}
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
        autocompleteList={suggestionsListComponent}
        error={error}
      />
    </div>
  );
};

export default Autocomplete;
