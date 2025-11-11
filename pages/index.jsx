import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackgroundElements from '../components/BackgroundElements';
import ServerInfo from '../components/ServerInfo';
import HomeContent from './home';

export default function HomePage() {
  return (
    <>
      <BackgroundElements />
      <Navbar />
      <ServerInfo />
      <HomeContent />
      <Footer />
    </>
  );
}