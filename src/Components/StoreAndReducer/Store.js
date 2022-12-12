import { configureStore } from "@reduxjs/toolkit";
import ButtonReducer from "./Reducer";
export const myStore=configureStore(
    {
        reducer:{
           btnreducer:ButtonReducer
        }
    }
)