import './App.css';

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
              <li>Home</li>
              <li>Projects</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>    
        </div>
      </header>
      <section>
        <div className='about-us'>
          <div className='about-us-container-1'>
            <p>Calidad y Ediciencia</p>
            <p>Imaginamos, creamos y desarrollamos espacios unicos de gran calidad y eficiencia para el habitat de las personas. Estamos interesados en acompañarte en esta gran etapa de tu vida, que es construir tu lugar en el mundo.</p>
            <button>Contatanos</button>
            <button>Proyectos</button>
          </div>
          <div className='about-us-container-2'>
            <p>Image 1</p>  
          </div>  
          <div className='about-us-container-3'>
            <p>Elegancia</p>
            <p>Uno de los principales pilares que nos caracreriza es la elegancia y sofisticacion de nuestros diseños, buscamos explotar al maximo la creatividad de nuestros diseños, pero entrando en la mente de nuestros clientes y encontrando los mejores diseños que se adecuan a sus necesidad, esto es algo que nos caracteriza y nos ha llevado a crear diseños unicos, que llevan nuestra escencia en cada diseño pero expresado a traves de los gustos y necesidades de nuestros clientes.</p>
          </div>
          <div className='Calidad'>
            <p>Calidad</p>
            <p>Trabajamos los materiales mas recomendados dentro del mercado de la construccion, y los combinamos para crear espacios armonicos para la comodida de nuestros clientes, sin dejar ningun detalle al azar.</p>
          </div>
          <div className='Economia'>
            <p>Economia</p>
            <p>La eficiencia es el ultimo toque dentro de nustros diseños, aprovechamos al maximo cada uno de los materiales, cuidamos el medio ambiente y tambien los recursos de nuestros clientes a la hora de tomar decisiones de diseño.</p>
          </div>
        </div>
      </section>
      <footer>
        <div className='footer-contacts'>
          <p>Delusio Logo</p>
          <p>Ubicación</p>
          <p>25 de Mayo 7825</p>
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
