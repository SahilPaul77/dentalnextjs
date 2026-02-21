
import WhyChooseUs from './whyChooseUs/page.jsx';
import Hero from './hero/page.jsx';
import AboutClinic from './aboutClinic/page.jsx';
import Statstrip from '../utils/statStrip/page.jsx';
import Services from './services/page.jsx'
import Expert from './expert/page.jsx'
import Gallery from './gallery/page.jsx'
import Testimonials from './testimonials/page.jsx'
import Location from './googlemap/page.jsx'
import FloatingContact from '../utils/floatingcontact/page.jsx';

const Home = () => {
  return (
   <>
    <Hero />
    <Statstrip />
    <AboutClinic />
    <Services />
    <WhyChooseUs />
    <Expert />
    <Gallery />
    <Testimonials />
    <Location />
    <FloatingContact />
   </>
  )
}
export default Home