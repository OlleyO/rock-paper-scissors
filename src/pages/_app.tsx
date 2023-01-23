import type { AppProps } from "next/app";

import AuthWrapper from "./auth-wrapper";

import "@/app/index.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthWrapper>
      <Component {...pageProps} />
    </AuthWrapper>
  );
};

export default App;
