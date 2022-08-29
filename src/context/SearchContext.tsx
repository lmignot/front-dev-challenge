import {
  FC,
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

interface SearchContextProps {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  isError: boolean;
  error: string;
  isSuccess: boolean;
  data: [];
}

interface SearchContextProviderProps {
  children?: ReactNode;
}

export const SearchContext = createContext<SearchContextProps>(
  {} as SearchContextProps,
);

export const SearchContextProvider: FC<
SearchContextProviderProps
> = ({ children }) => (<SearchContext.Provider value={{}}>{children}</SearchContext.Provider>);
