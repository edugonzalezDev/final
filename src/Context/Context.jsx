
import axios from "axios";
import { createContext, useEffect, useReducer, useContext } from "react";
import { reducer } from "../Reducers/reducer";

const DentistStates = createContext();

const initialState = {
    dentists: [],
    favs: JSON.parse(localStorage.getItem("favs")) || [],
    theme: "light",
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
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
        <DentistStates.Provider value={{ state, dispatch }}>
            {children}
        </DentistStates.Provider>
        );
};

export default Context;

export const useDentistStates = () => useContext(DentistStates);
