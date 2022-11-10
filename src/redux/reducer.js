import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./constant";

export const cartData = (data = [], action) => {

    switch (action.type) {
        case ADD_TO_CART:
            console.log("add to cart reducer called", action);
            return [action.data, ...data];
        case REMOVE_TO_CART:
            console.log("remove to cart reducer called", action);
            // const newData = data.map((value) => ({ ...value }))
            // newData.length = newData.length ? newData.length - 1 : []
            const remain = data.filter((item) => item.id !== action.data);
            console.log("remain data::", remain)
            return [...remain]
        case EMPTY_CART:
            console.log("empty cart reducer called", action);
            data = [];
            return [...data];
        default:
            return data;
    }

}