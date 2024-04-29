import { combineReducers, createSlice } from "@reduxjs/toolkit";
import allProducts from '../../data'

const initialState = {
    products:allProducts,
    total:0,
    price:0,
}

export const  productsSlice = createSlice({
    name:'products',
    initialState,
    reducers : {
        increment:(state , {payload}) => {
          const item =  state.products.find((product)=>{
                return product.id == payload
            })

            item.amount += 1
        } ,
        decrement:(state , {payload}) => {
            const item =  state.products.find((product)=>{
                return product.id == payload
            })

            item.amount -= 1
            combineReducers((state) => calculateTotal(state))
        } ,
        removeItem:(state, {payload}) => {
            calculateTotal:()=>{
                let price = 0;
                let total = 0;

                state.products.forEach((product) =>{
                    total = total + product.amount
                    price = price + product.amount * product.price
                })
                state.price = price
                state.total = total
            }
        }
    }
})

 export default productsSlice.reducer

