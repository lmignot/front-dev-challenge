import Home from './views/Home';
import { SearchContextProvider } from './context/SearchContext';

function App() {
  return (
    <div className="app">
      <SearchContextProvider>
        <Home />
      </SearchContextProvider>
    </div>
  );
}

export default App;
