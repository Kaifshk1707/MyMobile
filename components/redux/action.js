import { ADD_TO_CART, REMOVE_TO_CART } from './constants';

export const addToCart = (item) => ({
    type: ADD_TO_CART,
    data: item,
});

export const removeToCart = (item) => ({
    type: REMOVE_TO_CART,
    data: item,
});
