import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./constant";

export const addtocart = (data) => {
    console.log("add to cart action called ", data);
    return {
        type: ADD_TO_CART,
        data
    }
}
export const removetocart = (data) => {
    console.log("remove to cart action called ", data);
    return {
        type: REMOVE_TO_CART,
        data
    }
}
export const emptycart = (data) => {
    console.log("empty cart action called ", data);
    return {
        type: EMPTY_CART,
        data
    }
}