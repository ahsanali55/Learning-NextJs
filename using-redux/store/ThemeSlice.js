const initialState = {
  isDark: JSON.parse(localStorage.getItem("isDark")) ?? false,
};

const themeReducer = (state = initialState, action) => {
  localStorage.setItem("isDark", state.isDark);
  switch (action.type) {
    case "DARK":
      localStorage.setItem("isDark", state.isDark);
      document.documentElement.classList.add("dark");

      return {
        ...state,

        isDark: !state.isDark,
      };
    case "LIGHT": {
      localStorage.setItem("isDark", state.isDark);
      document.documentElement.classList.remove("dark");
      return {
        ...state,
        isDark: !state.isDark,
      };
    }
    default:
      return state;
  }
};
export default themeReducer;
