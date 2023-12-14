import './App.css';
import './Styles/MobileStyle.css';
import './Styles/PcStyle.css';
import { Routes, Route, Link } from 'react-router-dom';
import { FiMenu, FiX, FiHome, FiTrello, FiUsers, FiMail } from "react-icons/fi";
import { openMenu, closeMenu } from './Components/openMenuMobile';
import { HomeContainers } from './Components/homeContainers';
import { ProjectsContainer } from './Components/projectsContainers';
import { AboutUsProfile } from './Components/aboutUsProfile';
import { motion } from 'framer-motion';
import TypeWriteHome from './Components/typeWriter.js';

const Home = () => {
  return(
    <section>
      <div className='home'>
        <motion.div className='home-container1'
          initial={{ translateY: -250 }}
          whileInView={{ translateY: 0, transition: { duration: 0.9 } }}
          viewport={{ once: true }}>
          <p className='tittle'>Arquitectura Innovadora,<br/> Soluciones Intemporales</p>
          <TypeWriteHome />
          <div className='buttons'>
            <button><Link to={'/ContactUS'}>Contáctanos</Link></button>
            <button><Link to={'/Projects'}>Proyectos</Link></button>
          </div>
        </motion.div>
        <motion.div className='home-container2'
          initial={{ rotate: 5 }}
          whileInView={{ rotate: -5, transition: { type: 'just', velocity: 20 } }}
          viewport={{ once: true }}>

        </motion.div>  
        <HomeContainers
        value= '-150'
        className = 'left'
        tittle = 'Elegancia'
        description = 'Uno de los principales pilares que nos caracteriza es la elegancia y sofisticación, buscamos explotar al máximo la creatividad en nuestros diseños, y lo hacemos entendiendo tus necesidades, esto es algo que nos caracteriza y nos ha llevado a obtener resultados únicos.'
        image = 'homeImage1' />
        <HomeContainers
        value= '150'
        className = 'right'
        tittle = 'Calidad'
        description = 'Trabajamos los materiales más recomendados dentro del mercado de la construcción, y los combinamos para crear espacios armónicos para tu comodidad, sin dejar ningún detalle suelto al azar.'
        image = 'homeImage2' />
        <HomeContainers
        value= '-150'
        className = 'left'
        tittle = 'Economía'
        description = 'La eficiencia es el último pilar dentro de nuestros diseños, aprovechamos al máximo cada uno de los materiales, cuidamos el medio ambiente y también los recursos tus recursos a la hora de tomar decisiones de diseño.'
        image = 'homeImage3' />
      </div>
    </section>
  )
}

const Projects = () => {
  return(
    <section>
      <div className='projects'>
        <motion.div className='projects-container1'
          initial={{ translateY: -250 }}
          whileInView={{ translateY: 0, transition: { duration: 0.9 } }}
          viewport={{ once: true }}>
          <p className='tittle'>Una imagen habla por sí misma</p>
          <p>Te presentamos algunos de nuestros mejores proyectos.</p>
          <button><Link to={'/ContactUS'}>Contáctanos</Link></button>
        </motion.div>
        <motion.div className='projects-container2'
          initial={{ rotate: 5 }}
          whileInView={{ rotate: -5, transition: { type: 'just', velocity: 20 } }}
          viewport={{ once: true }}>
          
        </motion.div>
        <motion.div className='projects-container3'
          initial={{ opacity: 0.25 }}
          whileInView={{ opacity: 1, transition: { duration: 0.9 } }}>
          <p className='tittle'><b>Cada uno de nuestros diseños es único porque surge de la necesidad 
            de cada cliente.</b></p>
          <p>Algunos números que nos respaldan.</p>
          <div className='info-projects-container'>
            <p>Casas Residencial +200 <br/>
            Locales Comerciales +25 <br/>
            Edificios Residenciales +5 <br/>
            Edificios Comerciales +3</p>
          </div>
        </motion.div>
        <div className='projects-container4'>
          <p className='tittle'><b>Proyectos Destacados</b></p>
          <ProjectsContainer 
          houseName = 'Casa Natura'
          presentation = 'Esta casa fue realizada para clientes que aman el contacto con la naturaleza y los espacios abiertos. La iluminación y la ventilación que deja el paso del aire puro son la clave de este proyecto.'
          image = 'project-one'/>
          <ProjectsContainer 
          houseName = 'Casa de Piedra'
          presentation = 'En esta obra se utilizaron mayormente materiales naturales sin revestimiento, tratando de aprovechar las bondades de cada material en su estado puro, para generar el menor impacto ambiental.'
          image = 'project-two'/>
          <ProjectsContainer 
          houseName = 'Centro Comercial'
          presentation = 'Es un conjunto de locales comerciales modernos, atractivos para todos los clientes, con un diseño llamativo y elegante, en armonía con el entorno.'
          image = 'project-three'/>
          <ProjectsContainer 
          houseName = 'Hotel Turistico'
          presentation = 'Un lugar paradisiaco dentro de otro lugar paradisiaco, con todas las comodidades y vistas espectaculares, uno de nuestros mejores proyectos.'
          image = 'project-four'/>
        </div>
      </div>
    </section>
  )
}

const AboutUs = () => {
  return(
    <section>
      <div className='aboutUs'>
        <motion.div className='about-us-container1'
          initial={{ translateY: -250 }}
          whileInView={{ translateY: 0, transition: { duration: 0.9 } }}
          viewport={{ once: true }}>
          <p className='tittle'>Confianza inspirada, <br />servicios entregados</p>
          <p>Cada una de las personas que integran nuestro equipo fue seleccionada
             por su honestidad, responsabilidad y actitud.</p>
          <button><Link to={'/Projects'}>Proyectos</Link></button>
        </motion.div>
        <motion.div className='about-us-container2'
          initial={{ rotate: 5  }}
          whileInView={{  rotate: -5, transition: { type: 'just', velocity: 20 } }}
          viewport={{ once: true }}>
          
        </motion.div>
        <div className='about-us-container3'>
          <p className='tittle'><b>Como Trabajamos</b></p>
          <p>Trabajamos en conjunto con nuestros clientes para captar su esencia 
            y generar los diseños que mejor se adaptan a sus necesidades. Podes 
            contactarte con nosotros por alguno de nuestros canales o podes 
            enviarnos una solicitud para que nosotros nos pongamos en contacto con 
            vos! Una a vez que estemos en contacto acordaremos una reunión virtual 
            o presencial según tu disponibilidad. En esa reunión podremos captar 
            tu idea, y establecer un presupuesto estimativo.</p>
          <img src={require('./Images/aboutUsImage2.webp')}></img>
        </div>
        <div className='about-us-container4'>
          <p className='tittle'><b>Conoce a los profesionales detrás de nuestros proyectos</b></p>
          <p>Nuestro equipo está conformado por 6 personas</p>
          <AboutUsProfile 
          profile = 'profile1'
          name = 'Mario Duarte'
          profession = 'Arquitecto - UNLP' 
          position = 'Representante Legal y Fundador'
          position_two = 'Docente UNLP'/>
          <AboutUsProfile 
          profile = 'profile2'
          name = 'María Salvatierra'
          profession = 'Arquitecta - UBA' 
          position = 'Jefa de Proyectos'
          position_two = 'Docente UBA'/>
          <AboutUsProfile 
          profile = 'profile3'
          name = 'Natalia Ibarra'
          profession = 'Arquitecta - UBA' 
          position = 'Diseño de Interiores y Equipamiento'
          position_two = ''/>
          <AboutUsProfile 
          profile = 'profile4'
          name = 'Sergio Ortega'
          profession = 'Arquitecto - UNLaM' 
          position = 'Renderista'
          position_two = ''/>
          <AboutUsProfile 
          profile = 'profile5'
          name = 'Juan Lopez'
          profession = 'Arquitecto - UCA' 
          position = 'Proyectista'
          position_two = 'Docente UCA - Docente UADE'/>
          <AboutUsProfile 
          profile = 'profile6'
          name = 'Estefania Martinez'
          profession = 'Arquitecto - UBA' 
          position = 'Proyectista'
          position_two = 'Docente UBA'/>
        </div>
      </div>
    </section>
  )
}

const ContactUS = () => {
  return(
    <section>
      <div className='contact'>
        <motion.div className='contact-container1'
          initial={{ translateY: -250,
          }}
          whileInView={{ translateY: 0,
          transition: {
            duration: 0.9
            },
          }}
          viewport={{ 
            once: true
          }}>
          <p className='tittle'>¡Estaremos encantados de conocerte!</p>
          <p>Te ofrecemos nuestros contactos, podes contactarnos por cualquiera 
            de nuestros medios, o rellena el formulario y te contactaremos 
            nosotros.</p>
          <div className='buttons'>
            <button><Link to={'/AboutUs'}>Conócenos</Link></button>
            <button><Link to={'/'}>Volver al Inicio</Link></button>
          </div>
        </motion.div>
        <motion.div className='contact-container2'
          initial={{
            rotate: 5,
          }}
          whileInView={{
            rotate: -5,
              transition: {
              type: 'just',
              velocity: 20
            },
          }}
          viewport={{ 
            once: true 
          }}>
         
        </motion.div>
        <div className='contact-container3'>
          <p><b>Formulario de Contacto</b></p>
          <form>
            <label>Nombre</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Mensaje</label>
            <textarea name="message" />
            <input className='buttom' type="submit" value="Enviar" />
          </form>
        </div>
        <div className='contact-container4'>
          <div className='info'>
            <p className='tittle'>
              ¡Queremos conocerte! 
            </p>
            <p>
              Rellena el formulario con tus datos, nombre y apellido, tu dirección de corro
              electrónico y en el espacio de mensaje tu consulta y te contactaremos al mail 
              que no hayas proporcionado.
            </p>
          </div>
          <div className='map-container'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d821.1435229194631!2d-58.406763731600215!3d-34.58964186520683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1702410131991!5m2!1ses!2sar"></iframe>
          </div>
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
            <p>Delusio Arquitectura</p>
          </div>
          <div className='links-container-mobile' id='menu-mobile'>
            <div className='close-menu-container' onClick={closeMenu}>
              <FiX className='close-menu-icon'/>
            </div>
            <ul>
              <li><Link to={'/'} onClick={closeMenu}><FiHome className='mobile-menu-icons'/>Inicio</Link></li>
              <li><Link to={'/Projects'} onClick={closeMenu}><FiTrello className='mobile-menu-icons'/>Proyectos</Link></li>
              <li><Link to={'/AboutUs'} onClick={closeMenu}><FiUsers className='mobile-menu-icons'/>Conócenos</Link></li>
              <li><Link to={'/ContactUs'} onClick={closeMenu}><FiMail className='mobile-menu-icons'/>Contáctanos</Link></li>
            </ul>
            <p className='name'>Delusio Arquitectura</p>
          </div>   
          <div className='links-container-pc' id='menu-pc'>
            <ul>
              <li><Link to={'/'}><FiHome className='mobile-menu-icons'/>Inicio</Link></li>
              <li><Link to={'/Projects'}><FiTrello className='mobile-menu-icons'/>Proyectos</Link></li>
              <li><Link to={'/AboutUs'}><FiUsers className='mobile-menu-icons'/>Conócenos</Link></li>
              <li><Link to={'/ContactUs'}><FiMail className='mobile-menu-icons'/>Contáctanos</Link></li>
            </ul>
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
          <div className='logo-footer'>
            <p>Delusio Arquitecta</p>
          </div>
          <div className='footer-locAndPhone'>
            <p><u>Ubicación</u>:</p>
            <p>Austria y Beruti - CABA</p>
            <p><u>Teléfono</u>:</p>
            <p>+549 011 652 1903</p>
          </div>
          <p><u>Email</u>: ventas@grupodelusio.com</p>
          <p><u>Horarios</u>: Lunes a Viernes de 9.00hs a 18.00hs.</p>
          <div className='specifications-footer'>
            <p>Ésta página fue creada con fines educativos.</p>
          </div>
        </div>
      </footer>
    </body>
  );
}

export default App;
