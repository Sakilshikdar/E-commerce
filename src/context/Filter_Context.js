import { createContext, useEffect, useReducer, useContext } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/filterReducer"

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sort_value: "lowest",
}


const FilterContextProvider = ({ children }) => {

    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products])

    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" })
    }

    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" })
    }

    const sorting = () => {
        return dispatch({ type: "SORTING" })
    }

    useEffect(() => {
        dispatch({ type: "SET_SORT_DATA", payload: products })
    }, [state.sort_value])


    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}

export default FilterContextProvider;