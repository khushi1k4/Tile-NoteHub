import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = 
    {
        pastes: localStorage.getItem("pastes")? JSON.parse(localStorage.getItem('pastes')) : []
    } //if data present in localstorage then we'll parse it otherwise we will consider empty array  


// crateSlice then give it a name, initialState then list of reducers
export const pasteSlice = createSlice({
    name: 'pastes ',
    // initialState
    initialState,
    // List of reducer functions
    reducers: {
        addToPastes: (state,action) => {
            const paste = action.payload;

            //add a check -> if paste is already exist then don't create it with same title
            state.pastes.push(paste);
            localStorage.setItem("pastes",JSON.stringify(state.pastes)); //local storage set up and get object data into it
            toast.success("Paste Created Successfully!")
        },
        updateToPastes: (state, action) => {
            const paste = action.payload;
            const index = state.pastes.findIndex((item)=> item.id === paste.id);

            if(index >= 0)
            {
                state.pastes[index] = paste;

                localStorage.setItem('pastes',JSON.stringify(state.pastes));

                toast.success("Paste updated");
                // success gives green flag to toast
            }

        },
        resetAllPastes: (state, action) => { 
            state.pastes = [];

            localStorage.removeItem("pastes");
        },
        removeFromPastes: (state, action) => {
            const pasteId = action.payload;

            console.log(pasteId);
            const index = state.pastes.findIndex((item) => item.id === pasteId);

            if(index >= 0)
            {
                state.pastes.splice(index, 1);

                localStorage.setItem("pastes", JSON.stringify(state.pastes));
                toast.success("Paste deleted");
            }
        },
    }
})

export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes} = pasteSlice.actions

export default pasteSlice.reducer