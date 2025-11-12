import '../src/App.css';
import '../styles/admin.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServerInfo from '../components/ServerInfo';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <ServerInfo />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}