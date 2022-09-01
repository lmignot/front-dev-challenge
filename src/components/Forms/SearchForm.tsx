import { useCallback, useMemo, useState } from 'react';
import { useSearchContext } from '../../context/SearchContext';
import './forms.css';

function SearchForm() {
  const {isLoading, doQuery } = useSearchContext();

  const [searchTerm, setSearchTerm] = useState('');

  const onSubmit = useCallback((e: any) => {
    e.preventDefault();
    if (e.target.reportValidity()) {
      doQuery(searchTerm);
    }
  }, [doQuery, searchTerm]);

  const isButtonDisabled = useMemo(() => ({
    ...(isLoading ? { disabled: true } : {})
  }), [isLoading]);

  return (
    <form onSubmit={onSubmit} className="form form--inline" method="POST">
      <input type="text" name="query" placeholder="Search for a Beauty Product" className="form-element input--search" minLength={1} value={searchTerm} onChange={(e: any) => setSearchTerm(e.target.value)} />
      <button type="submit" name="search" className="form-element btn--submit" {...isButtonDisabled}>Search</button>
    </form>
  )
}

export default SearchForm;