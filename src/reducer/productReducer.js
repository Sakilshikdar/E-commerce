
const productReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return { ...state, isLoading: true };

        case "SET_API_DATA":
            const featureData = action.payload.filter((currEle) => {
                return currEle.featured === true;
            })
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: featureData
            }

        case "API_ERROR":
            return { ...state, isLoading: false, isError: true };

        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true
            }
        case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                singleProduct: action.payload,
                isSingleLoading: false,
                isSingleError: false
            }
        case "SET_SINGLE_ERROR":
            return {
                ...state,
                isSingleError: true
            }
        default:
            return state;
    }
};

export default productReducer;