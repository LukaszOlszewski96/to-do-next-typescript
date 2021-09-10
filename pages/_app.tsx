import '../styles/globals.css';
import '../styles/list.css';
import '../styles/index.css';
import '../styles/taskForm.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp;
