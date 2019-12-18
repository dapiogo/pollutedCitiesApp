export const filteredSuggestions = (value, countries) => {
    const regex = new RegExp(`^${value}`, "i");
    return countries.filter(({ country }) => country.match(regex));
};

export const removeDuplicateValues = elements => elements.filter(( item, index, array ) => index === array.findIndex(( element ) =>  element.city === item.city)).slice(0,10);

export const getFullDate = new Date().toISOString().slice(0, 10);

