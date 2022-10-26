import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchedWord : ''
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchedWord : (state,{payload})=>{
            state.searchedWord = payload.searchValue
        }
    }
})

export const {setSearchedWord} = searchSlice.actions;
export default searchSlice.reducer;