import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import '../public/styling.scss'
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app'
import  store  from '../store/store';


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>)
}
export default MyApp
