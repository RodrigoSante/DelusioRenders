import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

const Home = () => {
  return(
    <section>
      <div className='home'>
        <div className='home-container-1'>
          <p>Calidad y Ediciencia</p>
          <p>Imaginamos, creamos y desarrollamos espacios unicos de gran calidad y eficiencia para el habitat de las personas. Estamos interesados en acompañarte en esta gran etapa de tu vida, que es construir tu lugar en el mundo.</p>
          <button><Link to={'/ContactUS'}>Contactanos</Link></button>
          <button><Link to={'/Projects'}>Proyectos</Link></button>
        </div>
        <div className='home-container-2'>
          <p>Image 1</p>  
        </div>  
        <div className='home-container-3'>
          <p>Elegancia</p>
          <p>Uno de los principales pilares que nos caracreriza es la elegancia y sofisticacion de nuestros diseños, buscamos explotar al maximo la creatividad de nuestros diseños, pero entrando en la mente de nuestros clientes y encontrando los mejores diseños que se adecuan a sus necesidad, esto es algo que nos caracteriza y nos ha llevado a crear diseños unicos, que llevan nuestra escencia en cada diseño pero expresado a traves de los gustos y necesidades de nuestros clientes.</p>
        </div>
        <div className='home-container-4'>
          <p>Calidad</p>
          <p>Trabajamos los materiales mas recomendados dentro del mercado de la construccion, y los combinamos para crear espacios armonicos para la comodida de nuestros clientes, sin dejar ningun detalle al azar.</p>
        </div>
        <div className='home-container-5'>
          <p>Economia</p>
          <p>La eficiencia es el ultimo toque dentro de nustros diseños, aprovechamos al maximo cada uno de los materiales, cuidamos el medio ambiente y tambien los recursos de nuestros clientes a la hora de tomar decisiones de diseño.</p>
        </div>
      </div>
    </section>
  )
}

const Projects = () => {
  return(
    <section>
      <div className='Projects'>
        <div className='projects-container-1'>
          <p>Te presentamos algunos de nuestros mejores proyectos.</p>
          <button><Link to={'/ContactUS'}>Contactanos</Link></button>
        </div>
        <div className='projects-container-2'>
          <p>Image 2</p>
        </div>
        <div className='projects-container-3'>
          <p>Cada uno de nuestros diseños es unico porque se surge de la necesidad de cada cliente.</p>
          <p>Algúnos números que nos respaldan.</p>
          <div className='info-projects-container'>
            <p>Casas Unifamiliares con destino residencial +200</p>
            <p>Locales comerciales +25</p>
            <p>Edificios Residenciales +5</p>
            <p>Efificios Comerciales +3</p>
          </div>
        </div>
        <div className='projects-container-4'>
          <p>Proyectos destacados.</p>
          <p>Image 1</p>
          <p>Image 2</p>
          <p>Image 3</p>
          <p>Image 4</p>
        </div>
      </div>
    </section>
  )
}

const AboutUs = () => {
  return(
    <section>
      <div className='about-us-container-1'>
        <p>Conoce a Nuestro Equipo de Trabajo</p>
        <button><Link to={'/Projects'}>Proyectos</Link></button>
        <p>Nuestro equipo es el reflejo de lo que somos, por ende cada una de las personas que integran nuestro equipo fue seleccionada no solo por sus habilidades tecnicas, sino tambien por su honestidad, responsabilidad y actitud.</p>
      </div>
      <div className='about-us-container-2'>
        <p>Image 1</p>
      </div>
      <div className='about-us-container-3'>
        <p>Como Trabajamos</p>
        <p>Trabajamos en conjunto con nuestros clientes para captar su escencia y generar los diseños que mejor se adaptan a sus necesidades.</p>
        <p>Podes contactarte con nosotros por alguno de nuestros canales o podes enviarnos un solicitud para que nosotros nos pongamos en contacto con vos!</p>
        <p>Un a vez que estemos en contacto acordaremos una reunion virtual o prescencial segun la disponibilidad</p>
        <p>En esa reunion podremos captar tu idea, establecer un presupuesto estimativo.</p>
        <p>Image 1</p>
      </div>
      <div className='about-us-container-4'>
        <p>Comoce a los profesionales detras de nuestros proyectos</p>
        <p>Nuestro equipo esta conformado por 6 personas</p>
        <p>Image</p>
        <p>Description</p>
      </div>
    </section>
  )
}

const ContactUS = () => {
  return(
    <section>
      <div className='contact-container1'>
        <p>Contactanos</p>
        <button><Link to={'/'}>Volver al Inicio</Link></button>
        <p>Te ofrecemos nuestros contactos, podes contactarnos por cualquiera de nuestros medios, o rellena el formulario y te contactaremos nosotros.</p>
      </div>
      <div className='contact-container2'>
        <p>Image1</p>
      </div>
      <div className='contact-container3'>
        <p>Formulario de Contacto</p>
        <p>Contact Form</p>
      </div>
      <div className='contact-container4'>
        <div className='map-container'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d264.6449762569785!2d-65.20223100679665!3d-26.82009239820194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1700680018933!5m2!1ses!2sar" ></iframe>
        </div>
      </div>
    </section>
  )
}
      
const Error404 = () => {
  return(
    <section>
      <div className='error-container'>
        <p>404 Error</p>
      </div>
    </section>
  )
}

function App() {
  return (
    <body>
      <header>
        <div className='nav-container'>
          <div className='logo-container'>
            <p>Delusio Logo</p>
          </div>
          <div className='links-container'>
            <ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/Projects'}>Projects</Link></li>
              <li><Link to={'/AboutUs'}>About Us</Link></li>
              <li><Link to={'/ContactUs'}>Contact US</Link></li>
            </ul>
          </div>    
        </div>
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/AboutUS' element={<AboutUs/>}/>
        <Route path='/ContactUs' element={<ContactUS />}></Route>
        <Route path='/*' element={<Error404 />}/>
      </Routes>

      <footer>
        <div className='footer-contacts'>
          <p>Delusio Logo</p>
          <p>Ubicación</p>
          <p>25 de Mayo 792</p>
          <p>Telefono</p>
          <p>381 6521903</p>
          <p>email</p>
          <p>delusio-renders@grupodelusio.com</p>
          <p>Horarios</p>
          <p>Lunes a Viernes 9.00hs a 18.00hs.</p>
        </div>
      </footer>
    </body>
  );
}

export default App;
