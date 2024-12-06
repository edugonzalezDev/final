
import axios from "axios";
import { createContext, useState, useEffect, useReducer, useContext } from "react";
import { reducer } from "../Reducers/reducer";

const DentistStates = createContext();

const initialState = {
    dentists: [],
    favs: JSON.parse(localStorage.getItem("favs")) || [],
};

// eslint-disable-next-line react/prop-types
const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [theme, setTheme] = useState("light");

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);
  
    useEffect(() => {
      axios(url)
        .then((res) => {
          dispatch({ type: "GET_DENTISTS", payload: res.data });
        });
    }, []);

    return (
        <DentistStates.Provider value={{ state, dispatch, theme, setTheme }}>
            {children}
        </DentistStates.Provider>
        );
};

export default Context;

export const useDentistStates = () => useContext(DentistStates);
