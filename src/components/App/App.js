import React, { Component } from "react";
import Autocomplete from "../AutocompleteInput/Autocomplete";
import Header from "../Header/Header";
import List from "../List/List";
import Loader from "../Loader/Loader";
import { countries } from "../../assets/dataCountry/dataCountry";
import { getAllPollutedCities } from "../../assets/api/api";
import { filteredSuggestions as filterSugest, getFullDate as fullDate, removeDuplicateValues } from "../../assets/helpers/helper";
import styled from "../App/app.module.scss";

class App extends Component {
  state = {
    filteredSuggestions: [],
    showSuggestions: false,
    value: localStorage.getItem('value') || '',
    dataCity:[],
    isLoading: false,
    error:'',
  };

  onChangeAutocomplete = e => {
    const { value } = e.target;
    const checkValue = value.length;

    this.setState({
      filteredSuggestions: checkValue === 0 ? [] : filterSugest(value, countries),
      showSuggestions: checkValue === 0 ?  false : true,
      dataCity: [],
      isLoading: false,
      value,
      error: checkValue === 0 ? '' : this.state.error
    });

    localStorage.setItem('value', value.charAt(0).toUpperCase() + value.slice(1));
  };

  onClickAutocomplete = e => {
    const value = e.target.innerText;

    this.setState({
      filteredSuggestions: filterSugest(value, countries),
      showSuggestions: false,
      value
    });
  };

  onKeyDownAutocomplete = e => {
    const { filteredSuggestions } = this.state;
    const { keyCode } = e;

    if (keyCode === 13 || keyCode === 38 || keyCode === 40) {
      if (filteredSuggestions.length) {
        this.setState({
          showSuggestions: false,
          value: filteredSuggestions[0].country
        });
      }
    }
  };

  onSubmitAutocomplete = e => {

    e.preventDefault();

    const { filteredSuggestions } = this.state;
    const valueLocalStorage = localStorage.getItem('value');
    const lengthFilteredSuggestions = filteredSuggestions.length;

    if(lengthFilteredSuggestions || filterSugest(valueLocalStorage, countries).length) {
      this.setState({
        showSuggestions: false,
        value: lengthFilteredSuggestions ? filteredSuggestions[0].country : valueLocalStorage,
        isLoading: true
      });  

      const [{ code }] = lengthFilteredSuggestions ? filteredSuggestions : filterSugest(valueLocalStorage, countries);
      this.dataPollutedCities(code);

    } else {
      this.setState({ isLoading: false, error:'Wpisz poprawne dane' })
    }
  }

  dataPollutedCities = query => {
    return getAllPollutedCities(query, fullDate)
      .then(({ results }) => {
          this.setState({
            dataCity: removeDuplicateValues(results),
            isLoading: false,
            error:''
          })
      }).catch(() => this.setState({ isLoading: false }));
  };

  render() {
    const {
      onChangeAutocomplete,
      onClickAutocomplete,
      onKeyDownAutocomplete,
      onSubmitAutocomplete,
      state
    } = this;
    const { dataCity, isLoading, error } = state;
    return (
      <div className={styled.wrapper}>
        <Header/>
        <Autocomplete
          onChange={onChangeAutocomplete}
          onClick={onClickAutocomplete}
          onKeyDown={onKeyDownAutocomplete}
          onSubmit={onSubmitAutocomplete}
          data={state}
        />
        {isLoading ? <Loader/> : dataCity.length ? <List cities={dataCity}/> : <p className={styled.wrapper__error}>{error}</p>}
      </div>
    );
  }
}

export default App;
