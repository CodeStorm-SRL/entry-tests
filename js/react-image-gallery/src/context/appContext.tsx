import { FC, PropsWithChildren, createContext, useReducer } from "react";
import { ImageObjectInterface, getImages } from "../services/apiImages";
import { useQuery } from "@tanstack/react-query";

type Action = { type: "darkMode" };

interface ValueInterface {
  darkMode: boolean;
  images: ImageObjectInterface[];
  isLoading: boolean;
  error: Error | null;
  dispatch: React.Dispatch<Action>;
}

interface InitialStateInterface {
  darkMode: boolean;
}

// se l'utente ha la darkMode di default la abilita
const initialState: InitialStateInterface = {
  darkMode: window.matchMedia("(prefers-color-scheme: dark").matches,
};

// Context dell'applicazione
export const AppContext = createContext<ValueInterface>({
  darkMode: initialState.darkMode,
  images: [],
  isLoading: false,
  error: null,
  dispatch: () => {},
});

// Funzione reducer per useReducer
function reducer(
  state: InitialStateInterface,
  action: Action
): InitialStateInterface {
  switch (action.type) {
    case "darkMode":
      return { ...state, darkMode: !state.darkMode };

    default:
      return state;
  }
}

// Provider
const AppContextProvider: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  const [{ darkMode }, dispatch] = useReducer(reducer, initialState);

  // Get di TanStack Query
  // Ritorna i dati, isLoading e error
  const {
    data: images,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["images"],
    queryFn: getImages,
  });

  // Value del context
  const value: ValueInterface = {
    darkMode,
    images,
    isLoading,
    error,
    dispatch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
