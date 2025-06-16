import { configureStore, createSlice } from "@reduxjs/toolkit";
import data from './data';
import data2 from './data2';
import data3 from './data3';

let prouductsData = [...data, ...data2, ...data3];
let defaultData = prouductsData;


let cart = createSlice(
    {
        name: 'cart',
        initialState: [
            {
                id: 1,
                img: '/img/악세2.png',
                mainTitle: 'Tech21 FlexQuartz \n (iPhone 16 Pro Max) (MagSafe 호환) - 스누피 체리 블라썸',
                amount: 1,
                price: 79000
            },
            {
                id: 2,
                img: '/img/악세3.png',
                mainTitle: 'Tech21 EvoArt Snoopy Case for AirPods Pro 2 - 체리 블라썸',
                amount: 1,
                price: 47000
            }
        ],
        reducers: {
            addCount(state, action) {
                let num = action.payload;
                ++state[num].amount;
            },
            minusCount(state, action) {
                let num = action.payload;
                if (state[num].amount > 1) {
                    --state[num].amount
                };
            },
            sortName(state) {
                state.sort((a, b) => a.item > b.item ? 1 : -1);
            },
            addItem(state, action) {
                let num = state.findIndex(a => a.id === action.payload.id);
                if(num >= 0){
                    state[num].amount++;
                } else {
                    state.push(action.payload);
                }
            },
            removeItem(state, action){
                state.splice(action.payload, 1);
            }
        }
    });

export let { addCount, sortName, addItem, minusCount, removeItem } = cart.actions;

export default configureStore({
    reducer: {
        cart: cart.reducer
    }
}) 