import './styles/App.css';
import Navbar from './components/Navbar/Navbar';
import HomeTitle from './components/Navbar/HomeTitle';
import TimeLine from './components/TimeLine';
import { motion } from 'framer-motion';
import Tecnologys from './components/Tecnologys';
import Proyects from './components/proyects';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <section className='home' id="home">
        <Navbar />
        <HomeTitle/>
      </section>
      <section className='about' id="formacion">
      <h2 className="tec-title">Formación</h2>
        <TimeLine/>
      </section>
      <section className='tecnologys'  id="tecnologys">
      <h2 className="tec-title">Tecnologías</h2>
        <Tecnologys/>
      </section>
      <section className='proyects'  id="proyects">
      <h2 className="tec-title">Proyectos</h2>
        <Proyects/>
      </section>
      <section className='footer'  id="contact">
      <h2 className="tec-title">Contacto</h2>
        <Contact/>
        
      </section>
      
    </div>
  );
}

export default App;
