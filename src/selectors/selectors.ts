import { RootState } from "../store"

const getTheme = (state: RootState) => state.app.theme



export {
  getTheme,
}
