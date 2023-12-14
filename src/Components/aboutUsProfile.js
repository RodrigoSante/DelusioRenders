import './aboutUsProfileStyle.css';
import { motion } from 'framer-motion';

export function AboutUsProfile(props){
    return(
        <motion.div className='profile-container'
            initial={{ x: props.x }}
            whileInView={{ x: 0, transition: { duration: 1 } }}
            viewport={{ once: true }}>
            <img src={require(`../Images/${props.profile}.webp`)}></img>
                <div><p><b>{props.name}</b></p>
                <p>{props.profession}<br/>{props.position}<br/>{props.position_two}</p>
            </div>
        </motion.div>
    );
}