import { createSlice } from "@reduxjs/toolkit";


interface AppState {
  theme: string,
}

const initialState: AppState = {
  theme: 'dark',
}

const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLightTheme: (state: AppState) => {
      console.log('setlight')
      state.theme = 'light'
    },

    setDarkTheme: (state: AppState) => {
      console.log('setdark')
      state.theme = 'dark'
    },
  }
})


export const {setLightTheme, setDarkTheme} = AppSlice.actions
export default AppSlice.reducer

export type { AppState}