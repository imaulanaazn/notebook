import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchedType: '',
    searchedWord : ''
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchedType : (state,{payload})=>{
            state.searchedType = payload.searchedType
            state.searchedWord = payload.searchedWord
        }
    }
})

export const {setSearchedType} = searchSlice.actions;
export default searchSlice.reducer;