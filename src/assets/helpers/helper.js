export const filteredSuggestions = (value, countries) =>  countries.filter(({ country }) => country.toLowerCase().includes(value.toLowerCase()))

export const removeDuplicateValues = elements => elements.filter(( item, index, array ) => index === array.findIndex(( element ) =>  element.city === item.city)).slice(0,10);

export const getFullDate = new Date().toISOString().slice(0, 10);
