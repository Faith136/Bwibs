export const actionType = {
    SET_CART_SHOW : 'SET_CART_SHOW',
    SET_FOOD_ITEMS : 'SET_FOOD_ITEMS'
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case actionType.SET_CART_SHOW:
            return {
                ...state,
                cartShow: action.cartShow,
            };

            case actionType.SET_FOOD_ITEMS:
            return {
                ...state,
                foodItems: action.foodItems,
            };
            default:
                return state;
    }
};

export default reducer;