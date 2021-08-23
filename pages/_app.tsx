import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default App;
