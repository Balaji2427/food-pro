export function filterData (searchText, restaurants) {
    const filterData = restaurants.filter((restaurants) => restaurants.data.name.toLowerCase().includes(searchText.toLowerCase()));
    return filterData;
};