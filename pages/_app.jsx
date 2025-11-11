import '../src/App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../src/index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackgroundElements from '../components/BackgroundElements';
import ServerInfo from '../components/ServerInfo';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <BackgroundElements />
      <Navbar />
      <ServerInfo />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}