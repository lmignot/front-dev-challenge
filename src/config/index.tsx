const { REACT_APP_SKINCARE_API_URL, REACT_APP_PRODUCTS_PATH } = process.env;

interface Config {
  api: {
    baseUrl: string;
    products: string;
  }
}

const config: Config = {
  api: {
    baseUrl: REACT_APP_SKINCARE_API_URL!,
    products: REACT_APP_PRODUCTS_PATH!
  },
};

export default config;
