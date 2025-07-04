import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
    cartItems: cartItems,
    amount:4,
    total:0,
    isLoading:true
}


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart:(state)=>{
            state.cartItems=[];
        },
        removeItem : (state,action)=>{
            const itemid = action.payload;
            state.cartItems= state.cartItems.filter((item)=>item.id!== itemid);
        },
        increase: (state,action)=>{
            const cartitem = state.cartItems.find((item)=>item.id === action.payload);
            
            cartitem.amount = cartitem.amount+1;
        },
        decrease: (state,action)=>{
            const cartitem = state.cartItems.find((item)=>item.id === action.payload);
            cartitem.amount = cartitem.amount-1;
        },
        calculateTotals: (state)=>{
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item)=>{
                amount += item.amount;
                total += item.amount * item.price
            })
            state.amount = amount;
            state.total = total;
        }
    }
})

//console.log(cartSlice)

export const {clearCart,removeItem,increase,decrease,calculateTotals} = cartSlice.actions;
export default cartSlice.reducer