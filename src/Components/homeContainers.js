import './homeContainersStyle.css';

export function HomeContainers (props){
    return(
        <div className='home-container'>
          <p><b>{props.tittle}</b></p>
          <p>{props.description}</p>
          <img src={require(`../Images/${props.image}.jpg`)}></img>
        </div>
    );
};