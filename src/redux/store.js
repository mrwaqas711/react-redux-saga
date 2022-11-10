import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import productSaga from "./productSaga";
import createSagaMiddleware from "redux-saga";


const sagamiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagamiddleware]
});
sagamiddleware.run(productSaga);

export default store;