import type { AppProps } from "next/app";

import "@/app/index.scss";
import AuthWrapper from "./auth-wrapper";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthWrapper>
      <Component {...pageProps} />
    </AuthWrapper>
  );
};

export default App;
