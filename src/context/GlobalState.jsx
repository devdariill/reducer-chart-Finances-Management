import { createContext, useContext, useState } from "react";

export const Context = createContext();

export function useGlobalState () {
    const context = useContext(Context);
    if (!context) {
        throw new Error("useGlobalState debe estar dentro del proveedor GlobalState");
    }
    return context;
}

export function GlobalProvider  ({ children }) {
    const [state, setState] = useState([])
    return (
        <Context.Provider
            value={{
                state,
                setState
            }}
        >
            {children}
        </Context.Provider>
    );
}

