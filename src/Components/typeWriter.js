import { motion } from "framer-motion";
import './typeWriterStyle.css';

const TypeWriteHome = () => {
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

export default TypeWriteHome;