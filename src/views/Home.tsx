import Header from '../components/Header/Header';
import imgSrc from '../assets/beauty-products.jpg';
import Main from '../components/Layout/Main';
import Page from '../components/Layout/Page';
import PosterImage from '../components/Poster/PosterImage';
import SearchForm from '../components/Forms/SearchForm';
// import { useSearchContext } from '../context/SearchContext';


function Home() {
  // const {isLoading, isError, isSuccess, data, error } = useSearchContext();

  return (
    <Page>
      <Header pageTitle="This is a page for beauty product search">
        <PosterImage src={imgSrc} altText="Hand selecting one of a collection of beauty products" />
      </Header>
      <Main>
        <SearchForm />
      </Main>
    </Page>
  )
}

export default Home;