import { capitalizeWords } from '../../utils';
import { useMemo } from 'react';
import { useSearchContext } from '../../context/SearchContext';
import './searchResults.css';

interface SearchResultItemData {
  id: string;
  brand: string;
  name: string;
};

function SearchResultItem(data: SearchResultItemData) {
  const { id, brand, name } = data;
  return <li key={id}><strong>{capitalizeWords(brand)}</strong> - {capitalizeWords(name)}</li>
}

function SearchResults() {
  const { data, isSuccess } = useSearchContext();

  const searchResultItems = useMemo(() => data.map(it => SearchResultItem(it)), [data]);

  return (<ul className="list list--search-results">
    {!!data.length && searchResultItems}
    {isSuccess && !data.length && <li>No results match your search query</li>}
  </ul>);
}

export default SearchResults;