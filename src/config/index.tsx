const { REACT_APP_SKINCARE_API_URL, REACT_APP_PRODUCT_PATH } = process.env;

interface Config {
  api: {
    baseUrl: string;
    product: string;
  }
}

const config: Config = {
  api: {
    baseUrl: REACT_APP_SKINCARE_API_URL!,
    product: REACT_APP_PRODUCT_PATH!
  },
};

export default config;
