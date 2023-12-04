import './homeContainersStyle.css';

export function HomeContainers (props){
    return(
        <div className={`home-container ${props.className === 'right' ? 'reverce' : ''}`}>
          <p className='tittle'><b>{props.tittle}</b></p>
          <p>{props.description}</p>
          <img src={require(`../Images/${props.image}.webp`)}></img>
        </div>
    );
};