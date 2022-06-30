import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface AppState {
  theme: string,
  scrollable: boolean,
}

const initialState: AppState = {
  theme: 'dark',
  scrollable: true
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

    setScrollable: (state: AppState) => {
      state.scrollable = !state.scrollable
    }
  }
})


export const {setLightTheme, setDarkTheme, setScrollable} = AppSlice.actions
export default AppSlice.reducer

export type { AppState}
