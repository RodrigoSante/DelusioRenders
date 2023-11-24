import './App.css';
import './Styles/MobileStile.css';
import { Routes, Route, Link } from 'react-router-dom';
import { FiMenu, FiX, FiHome, FiTrello, FiUsers, FiMail } from "react-icons/fi";
import { openMenu, closeMenu } from './Components/openMenuMobile';

const Home = () => {
  return(
    <section>
      <div className='home'>
        <div className='home-container1'>
          <p>Somos un estudio de arquitectura, dedicado al diseño y dirección 
            de proyectos unifamiliares, multifamiliares y comerciales.</p>
          <button><Link to={'/ContactUS'}>Contáctanos</Link></button>
          <button><Link to={'/Projects'}>Proyectos</Link></button>
        </div>
        <div className='home-container2'>
          <p>Image 1</p>  
        </div>
        <div className='home-container3'>
          <p>Calidad y Eficiencia</p>
          <p>Imaginamos y creamos espacios únicos de gran calidad y eficiencia 
              para el confort de tu familia. Queremos acompañarte en esta gran 
              etapa en tu vida, vamos crear tu lugar en el mundo!</p>
        </div>  
        <div className='home-container4'>
          <p>Elegancia</p>
          <p>Uno de los principales pilares que nos caracteriza es la elegancia 
            y sofisticación, buscamos explotar al máximo la creatividad en 
            nuestros diseños, y lo hacemos entendiendo tus necesidades, esto 
            es algo que nos caracteriza y nos ha llevado a obtener resultados 
            únicos.</p>
        </div>
        <div className='home-container5'>
          <p>Calidad</p>
          <p>Trabajamos los materiales más recomendados dentro del mercado 
            de la construcción, y los combinamos para crear espacios armónicos 
            para tu comodidad, sin dejar ningún detalle suelto al azar.</p>
        </div>
        <div className='home-container6'>
          <p>Economía</p>
          <p>La eficiencia es el último pilar dentro de nuestros diseños, 
            aprovechamos al máximo cada uno de los materiales, cuidamos el medio 
            ambiente y también los recursos tus recursos a la hora de 
            tomar decisiones de diseño.</p>
        </div>
      </div>
    </section>
  )
}

const Projects = () => {
  return(
    <section>
      <div className='Projects'>
        <div className='projects-container1'>
          <p>Te presentamos algunos de nuestros mejores proyectos.</p>
          <button><Link to={'/ContactUS'}>Contáctanos</Link></button>
        </div>
        <div className='projects-container2'>
          <p>Image 2</p>
        </div>
        <div className='projects-container3'>
          <p>Cada uno de nuestros diseños es único porque surge de la necesidad 
            de cada cliente.</p>
          <p>Algunos números que nos respaldan.</p>
          <div className='info-projects-container'>
            <p>Casas Unifamiliares con destino residencial +200</p>
            <p>Locales comerciales +25</p>
            <p>Edificios Residenciales +5</p>
            <p>Edificios Comerciales +3</p>
          </div>
        </div>
        <div className='projects-container4'>
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
      <div className='about-us-container1'>
        <p>Conoce a Nuestro Equipo de Trabajo</p>
        <button><Link to={'/Projects'}>Proyectos</Link></button>
        <p>Nuestro equipo es el reflejo de lo que somos, por ende, cada una de 
          las personas que integran nuestro equipo fue seleccionada no solo por 
          sus habilidades técnicas, sino también por su honestidad, responsabilidad 
          y actitud.</p>
      </div>
      <div className='about-us-container2'>
        <p>Image 1</p>
      </div>
      <div className='about-us-container3'>
        <p>Como Trabajamos</p>
        <p>Trabajamos en conjunto con nuestros clientes para captar su esencia 
          y generar los diseños que mejor se adaptan a sus necesidades. Podes 
          contactarte con nosotros por alguno de nuestros canales o podes 
          enviarnos una solicitud para que nosotros nos pongamos en contacto con 
          vos! Una a vez que estemos en contacto acordaremos una reunión virtual 
          o presencial según tu disponibilidad. En esa reunión podremos captar 
          tu idea, y establecer un presupuesto estimativo.</p>
        <p>Image 1</p>
      </div>
      <div className='about-us-container4'>
        <p>Conoce a los profesionales detrás de nuestros proyectos</p>
        <p>Nuestro equipo está conformado por 6 personas</p>
        <p>Image</p>
        <p>Descripción</p>
      </div>
    </section>
  )
}

const ContactUS = () => {
  return(
    <section>
      <div className='contact-container1'>
        <p>Contáctanos</p>
        <button><Link to={'/'}>Volver al Inicio</Link></button>
        <p>Te ofrecemos nuestros contactos, podes contactarnos por cualquiera 
          de nuestros medios, o rellena el formulario y te contactaremos 
          nosotros.</p>
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
        <div className='nav'>
          <div className='logo-container'>
            <p>Delusio Logo</p>
          </div>
          <div className='links-container' id='menu-mobile'>
            <div className='close-menu-container' onClick={closeMenu}>
              <FiX className='close-menu-icon'/>
            </div>
            <ul>
              <li><Link to={'/'}><FiHome className='mobile-menu-icons'/>Inicio</Link></li>
              <li><Link to={'/Projects'}><FiTrello className='mobile-menu-icons'/>Proyectos</Link></li>
              <li><Link to={'/AboutUs'}><FiUsers className='mobile-menu-icons'/>Conócenos</Link></li>
              <li><Link to={'/ContactUs'}><FiMail className='mobile-menu-icons'/>Contáctanos</Link></li>
            </ul>
            <p className='name'>Delusio Arquitectura</p>
          </div>   
          <div className='open-menu-container' onClick={openMenu}>
            <FiMenu className='open-menu-icon'/>
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
          <p>Teléfono</p>
          <p>+549 381 652 1903</p>
          <p>email</p>
          <p>ventas@grupodelusio.com</p>
          <p>Horarios</p>
          <p>Lunes a Viernes de 9.00hs a 18.00hs.</p>
          <p>Ésta página fue creada con fines educativos.</p>
        </div>
      </footer>
    </body>
  );
}

export default App;
