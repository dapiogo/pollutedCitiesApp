import React, { Component } from "react";
import { countries } from "../../assets/dataCountry/dataCountry";
import Autocomplete from "../AutocompleteInput/Autocomplete";
import { getAllPollutedCities } from "../../assets/api/api";

class App extends Component {
  state = {
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    value: ""
  };

  onChangeAutocomplete = e => {
    const { value } = e.target;

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: this.filteredSuggestions(value),
      showSuggestions: true,
      value
    });
  };

  onClickAutocomplete = e => {
    const value = e.target.innerText;
    const [{ code }] = this.state.filteredSuggestions;

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: this.filteredSuggestions(value),
      showSuggestions: false,
      value: e.target.innerText
    });

    this.dataPollutedCities(code);
  };

  onKeyDownAutocomplete = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;
    const { keyCode } = e;

    if (keyCode === 13 || keyCode === 38 || keyCode === 40) {
      if (filteredSuggestions.length) {
        this.setState({
          activeSuggestion: 0,
          showSuggestions: false,
          value: filteredSuggestions[activeSuggestion].country
        });
        const [{ code }] = filteredSuggestions;
        this.dataPollutedCities(code);
      }
    }
  };

  filteredSuggestions = value => {
    const regex = new RegExp(`^${value}`, "i");
    return countries.filter(({ country }) => country.match(regex));
  };

  dataPollutedCities = query => {
    return getAllPollutedCities(query)
      .then(cos => console.log(cos))
      .catch(err => console.log(err));
  };

  render() {
    const {
      onChangeAutocomplete,
      onClickAutocomplete,
      onKeyDownAutocomplete,
      state
    } = this;
    return (
      <>
        <Autocomplete
          onChange={onChangeAutocomplete}
          onClick={onClickAutocomplete}
          onKeyDown={onKeyDownAutocomplete}
          data={state}
        />
      </>
    );
  }
}

export default App;
