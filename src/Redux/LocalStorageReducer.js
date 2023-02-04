import { createSlice } from '@reduxjs/toolkit'
import { json } from 'react-router-dom';
const items=localStorage.getItem('URLdata')!= null ? JSON.parse(localStorage.getItem('URLdata')):[];
const initialState = {
    URLdata:items,
    id:0,
  }
 export const data=createSlice({
    name:'URLdata',
    initialState,
    reducers:{
        //      add item in the store
        additem:(state,action)=>{
            const newitem=action.payload;
            state.URLdata.push({
                id:state.id +=1,
                oldURL:newitem.oldURL,
                newURL:newitem.newURL,
                expiryDate:newitem.expiryDate,
            })
            localStorage.setItem('URLdata',JSON.stringify(state.URLdata.map(item=>item)))
        },
        removeitem:(state,action)=>{
            const id=action.payload;
            const existingitem=state.URLdata.find((item)=>item.id==id)
        }
    }
 })