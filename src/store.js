import {configureStore} from '@reduxjs/toolkit'
import CategoriesReducer from "./feature/CategorySlice"
import ProductReducer from "./feature/ProductSlice";
import BasketSlice from "./feature/BasketSlice";
import RegisterSlice from "./feature/RegisterSlice";
import CounterSlice from "./feature/CounterSlice";
import FilterSlice from "./feature/FilterSlice";
import PersonalInfo from "./feature/PersonalInfo";

export const store = configureStore({
    reducer: {
        categories: CategoriesReducer,
        products: ProductReducer,
        basket: BasketSlice,
        registerStatus: RegisterSlice,
        counter: CounterSlice,
        filtered: FilterSlice,
        personalInfo:PersonalInfo
    },
})