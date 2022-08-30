import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen } from '@testing-library/react';
import { SearchContextProvider, useSearchContext } from './SearchContext';
import { useState } from 'react';
import '@testing-library/jest-dom';

const boolToYesNo = (b: boolean) => b ? 'Y' : 'N';

const setup = (jsx: any) => {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  }
}

const TestConsumer = () => {
  const {isLoading, isError, isSuccess, data, error, doQuery } = useSearchContext();
  const [value, setValue] = useState('');
  return (
    <>
      <p>Loading: {boolToYesNo(isLoading)}</p>
      <p>Error: {boolToYesNo(isError)}</p>
      <p>Success: {boolToYesNo(isSuccess)}</p>
      <p>Data: {JSON.stringify(data)}</p>
      <p>Error Message: {error ?? 'None'}</p>

      <form onSubmit={(e) => {
        e.preventDefault();
        doQuery(value);
      }}>
        <label htmlFor="search-input">Search</label>
        <input onChange={(e) => setValue(e.target.value)} id="search-input" type="search" value={value} />
        <button type="submit" aria-label="submit">Search</button>
      </form>
    </>
  )
}

describe ('<SearchContextProvider/>', () => {

  test('Provides SearchContextProps to child elements', () => {
    render(<SearchContextProvider><TestConsumer /></SearchContextProvider>);
    expect(screen.queryByText(/^Loading:/)).toHaveTextContent('Loading: N');
    expect(screen.getByText(/^Error:/)).toHaveTextContent('Error: N');
    expect(screen.getByText(/^Success:/)).toHaveTextContent('Success: N');
    expect(screen.getByText(/^Data:/)).toHaveTextContent('Data: []');
    expect(screen.getByText(/^Error Message:/)).toHaveTextContent('Error Message: None');
  });

  test(`doQuery changes loading to 'Y'`, async () => {
    const { user } = setup(<SearchContextProvider><TestConsumer /></SearchContextProvider>);
    const searchInput = screen.getByLabelText('Search');
    const searchButton = screen.getByRole('button');
    fireEvent.change(searchInput, {target: {value: 'rose water'}});
    await user.click(searchButton);

    expect(screen.queryByText(/^Loading:/)).toHaveTextContent('Loading: Y');
  });

});