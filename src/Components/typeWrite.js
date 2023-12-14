import { motion } from "framer-motion";
import './typeWriterStyle.css';

export const TypeWriteHome = () => {
    const text = 'Somos un estudio de arquitectura, dedicado al diseño y dirección de proyectos unifamiliares, multifamiliares y comerciales.';
    return(
        <div>
            {text.split('').map((letter, index) => (
                <motion.span className='text'
                key={index}
                initial= {{ opacity: 0, y:20 }}
                whileInView= {{opacity: 1, y:0}}
                transition={{ duration: 0.1, delay: index * 0.015 }}
                viewport={{ once: true }}>
                    {letter}
                </motion.span>
            ))}
        </div>
    );
};

export const TypeWriteProjects = () => {
    const text = 'Te presentamos algunos de nuestros mejores proyectos.';
    return(
        <div>
            {text.split('').map((letter, index) => (
                <motion.span className='text'
                key={index}
                initial= {{ opacity: 0, y:20 }}
                whileInView= {{opacity: 1, y:0}}
                transition={{ duration: 0.1, delay: index * 0.015 }}
                viewport={{ once: true }}>
                    {letter}
                </motion.span>
            ))}
        </div>
    );
};



export const TypeWriteProjectsInfo = () => {
    const text = 'Casas Residencial +200 \nLocales Comerciales +25 \nEdificios Residenciales +5 \nEdificios Comerciales +3';
    return(
        <div>
            <pre>{text.split('').map((letter, index) => (
                <motion.span className='info'
                key={index}
                initial= {{ opacity: 0, y:20 }}
                whileInView= {{opacity: 1, y:0}}
                transition={{ duration: 0.1, delay: index * 0.015 }}
                viewport={{ once: true }}>
                    {letter}
                </motion.span>
            ))}</pre>
        </div>
    );
};

export const TypeWriteAboutUs = () => {
    const text = 'Cada una de las personas que integran nuestro equipo fue seleccionada por su honestidad, responsabilidad y actitud.';
    return(
        <div>
            {text.split('').map((letter, index) => (
                <motion.span className='text'
                key={index}
                initial= {{ opacity: 0, y:20 }}
                whileInView= {{opacity: 1, y:0}}
                transition={{ duration: 0.1, delay: index * 0.015 }}
                viewport={{ once: true }}>
                    {letter}
                </motion.span>
            ))}
        </div>
    );
};

export const TypeWriteContact = () => {
    const text = 'Te ofrecemos nuestros contactos, podes contactarnos por cualquiera de nuestros medios, o rellena el formulario y te contactaremos nosotros.';
    return(
        <div>
            {text.split('').map((letter, index) => (
                <motion.span className='text'
                key={index}
                initial= {{ opacity: 0, y:20 }}
                whileInView= {{opacity: 1, y:0}}
                transition={{ duration: 0.1, delay: index * 0.015 }}
                viewport={{ once: true }}>
                    {letter}
                </motion.span>
            ))}
        </div>
    );
};