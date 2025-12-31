
import { createStore } from "redux";
import themeReducer from "./ThemeSlice";





export const store = createStore(

    themeReducer,

     // Redux DevTools support
  typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)