import './homeContainersStyle.css';
import { motion } from 'framer-motion';

export function HomeContainers (props){
    return(
        <motion.div className={`home-container ${props.className === 'right' ? 'reverse' : ''}`}
          initial={{
            translateX: props.value,
            opacity: 0.25
          }}
          whileInView={{ 
            translateX: 0,
            opacity: 1,
            transition: {
              type: 'spring',
              duration: 2
            }
          }}
          viewport={{ 
            once: true
           }}>
          <div className='container-tittle'>
            <p className='tittle'><b>{props.tittle}</b></p>
            <p>{props.description}</p>
          </div>
          <div className='container-img'>
            <p className='tittle'><b>{props.tittle}</b></p>
            <img src={require(`../Images/${props.image}.webp`)}></img>
          </div>
        </motion.div>
    );
};