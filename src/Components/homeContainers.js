import './homeContainersStyle.css';

export function HomeContainers (props){
    return(
        <div className={`home-container ${props.className === 'right' ? 'reverse' : ''}`}>
          <div className='container-tittle'>
            <p>{props.description}</p>
          </div>
          <div className='container-img'>
            <p className='tittle'><b>{props.tittle}</b></p>
            <img src={require(`../Images/${props.image}.webp`)}></img>
          </div>
        </div>
    );
};