import {createSlice} from '@reduxjs/toolkit'

const token = localStorage.getItem("token")
const userData = localStorage.getItem("user")
const user = userData ? JSON.parse(userData) : ""
const authReducer = createSlice({
    name:"authReducer",
    initialState:{
        userToken: token ? token : null,
        user : user ? user : null
    },
    reducers:{
        setAdminToken : (state,action) => {
            state.adminToken = action.payload
        },
        setUserToken:(state,action) => {
            state.userToken = action.payload
        },
        setUser:(state,action) => {
            state.user = action.payload
        },
        logout:(state,{payload}) => {
            // localStorage.removeItem(payload)
            // if(payload === 'token'){
            //     state.adminToken = null
            // }else if(payload === 'userToken'){
            //     state.user = null;
            //     state.userToken = null
            // }
           
        }
    }
})

export const {setAdminToken,logout,setUserToken,setUser} = authReducer.actions;

export default authReducer.reducer 