import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    language: '',
    countryCode: 'MK',
    countryFlag: '/static/country-flag/macedonian.png'
}

// Action creators are generated for each case reducer function
export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload
        },
        setCountryCode: (state, action) => {
            state.countryCode = action.payload
        },
        setCountryFlag: (state, action) => {
            state.countryFlag = action.payload
        },
    },
})

export const { setLanguage, setCountryCode, setCountryFlag } = languageSlice.actions

export default languageSlice.reducer
