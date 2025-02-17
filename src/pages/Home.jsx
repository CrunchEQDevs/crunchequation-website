import Navbar from '../components/Navbar';
import AboutCrunch from '../components/AboutCrunch';
import VideoComponent from '../components/Video';
import News from '../components/News';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer/index.jsx';
import Form from '../components/Form/index.jsx';

const Home = () => {
  return (
    <div className='bg-blackBg'>
      <Navbar />
      <VideoComponent />
      <AboutCrunch />
      <News />
      <Team />
      <Testimonials />
      <Form/>
      <Footer />
    </div>
  );
};

export default Home;
