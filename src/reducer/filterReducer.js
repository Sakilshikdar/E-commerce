
const FilterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload]
            }
        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true
            }
        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false
            }
        case "SORTING":
            const userSortValue = document.getElementById("sort");
            const sortValue = userSortValue.options[userSortValue.selectedIndex].value;
            return {
                ...state,
                sort_value: sortValue,
            }
        case "SET_SORT_DATA":
            let newSortData;
            const temSortData = [...action.payload];
            if (state.sort_value === "a-z") {
                newSortData = temSortData.sort((a, b) =>
                    a.name.localeCompare(b.name)
                )
            }
            if (state.sort_value === "z-a") {
                newSortData = temSortData.sort((a, b) =>
                    b.name.localeCompare(a.name)
                )
            }

            if (state.sort_value === "lowest") {
                newSortData = temSortData.sort((a, b) =>
                    a.price - b.price
                )
            }
            if (state.sort_value === "highest") {
                newSortData = temSortData.sort((a, b) =>
                    b.price - a.price
                )
            }

            return {
                ...state,
                filter_products: newSortData
            }
        default:
            return state
    }
}

export default FilterReducer;