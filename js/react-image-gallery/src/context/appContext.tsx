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

const initialState: InitialStateInterface = {
  darkMode: false,
};

export const AppContext = createContext<ValueInterface>({
  darkMode: initialState.darkMode,
  images: [],
  isLoading: false,
  error: null,
  dispatch: () => {},
});

function reducer(state: InitialStateInterface, action: Action) {
  switch (action.type) {
    case "darkMode":
      return { ...state, darkMode: !state.darkMode };

    default:
      return state;
  }
}

const AppContextProvider: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  const [{ darkMode }, dispatch] = useReducer(reducer, initialState);

  const {
    data: images,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["images"],
    queryFn: getImages,
  });

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
