import Header from '../components/Header/Header';
import imgSrc from '../assets/beauty-products.jpg';
import Main from '../components/Layout/Main';
import Page from '../components/Layout/Page';
import PosterImage from '../components/Poster/PosterImage';
import SearchForm from '../components/Forms/SearchForm';
import SearchResults from '../components/SearchResults/SearchResults';
import { useSearchContext } from '../context/SearchContext';


function Home() {
  const {isSuccess } = useSearchContext();

  return (
    <Page>
      <Header pageTitle="This is a page for beauty product search">
        <PosterImage src={imgSrc} altText="Hand selecting one of a collection of beauty products" />
      </Header>
      <Main>
        <SearchForm />
        {isSuccess && <SearchResults />}

        {/* Ideally we'd show some kind of loading animation or indicator to the user that the app is working */}
        {/* {isLoading && <p className="loading">Searching&hellip;</p>} */}

        {/* Provide error feedback if necessary. At the very least if there is loss of internet connectiviy or the API is down */}
        {/* {isError && <p className="error">The following error occured while searching: {error}</p>} */}
      </Main>
    </Page>
  )
}

export default Home;