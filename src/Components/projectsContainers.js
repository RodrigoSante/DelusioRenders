import './projectsContainerStyle.css'
import { motion } from 'framer-motion';

export function ProjectsContainer(props){
    return(
        <motion.div className='project-one'
            initial={{ y: props.y }}
            whileInView= {{ y:0, transition: { type: 'spring', duration: 2 } }}
            viewport={{ once: true }}>
            <p><b>{props.houseName}</b></p>
            <p>{props.presentation}</p>
            <img src={require(`../Images/${props.image}.webp`)}></img>
        </motion.div>
    );
}