import { ADD_TO_CART } from './constants';

const initialState = {
    data: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, data: [...state.data, action.data] };
            default:
                return state

    }
}
