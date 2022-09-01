import axios from 'axios';
import config from '../config';
import {
  FC,
  ReactNode,
  createContext,
  useState,
  useMemo,
  useCallback,
  useContext,
} from 'react';

export type SearchResults = [];
export type ErrorMessage = string | null;
export type SearchContextHook = () => SearchContextProps;

interface SearchContextProps {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  error?: ErrorMessage;
  data: SearchResults;
  doQuery: (_: string) => Promise<void>;
}

interface SearchContextProviderProps {
  children?: ReactNode;
}

export const SearchContext = createContext<SearchContextProps>({
    isLoading: false,
    isError: false,
    isSuccess: false,
    error: null,
    data: [],
    doQuery: async (_: string) => {}
  } as SearchContextProps);

export const SearchContextProvider: FC<
SearchContextProviderProps
> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<ErrorMessage>(null);
  const [data, setData] = useState<SearchResults>([]);

  // Only need to get the api url once in this context
  const apiQueryUrl = useMemo(() => {
    const { api: { baseUrl, product }} = config;
    return `${baseUrl}${product}?q=`
  }, []);

  const doQuery = useCallback(async (q: string) => {
    try {
      // Reset state before querying
      setData([]);
      setIsSuccess(false);
      setIsError(false);
      setError(null);

      // indicate that we are working
      setIsLoading(true);

      // Join space-separated terms with '+' to perform a LIKE search against the API as per
      // https://github.com/LauraRobertson/skincareAPI#get-ingredientqrosewater
      const query = q.split(/\s/g).join('+');

      const { data } = await axios.get(`${apiQueryUrl}${query}`);

      setIsLoading(false);
      setData(data);
      setIsSuccess(true);
    } catch (e:any) {
      setIsLoading(false);
      setIsError(true);
      setError(e.message as string || e);
    }
    console.log(q);
  }, [apiQueryUrl]);

  const value = useMemo(() => ({
    isLoading,
    isError,
    isSuccess,
    doQuery,
    error,
    data
  }), [data, doQuery, error, isError, isLoading, isSuccess]);

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export const useSearchContext: SearchContextHook = () => useContext(SearchContext);
