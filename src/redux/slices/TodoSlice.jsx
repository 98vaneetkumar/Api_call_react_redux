import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const todo=createAsyncThunk('fetchTodo',async()=>{
    const response=await fetch('https://fakestoreapi.com/products')
    return response.json()
})

const TodoSlice=createSlice({
    name:"Todo",
    initialState:{
      isLoading:false,
      data:null,
      isError:false
    },
    extraReducers:(builder)=>{
        builder.addCase(todo.pending,(state,action)=>{
            state.isLoading=true;
        })
        builder.addCase(todo.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        })
        builder.addCase(todo.rejected,(state,action)=>{
            console.log("Error",action.payload)
            state.isError=true;
        })
    }
})

export default TodoSlice.reducer;