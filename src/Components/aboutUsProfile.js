import './aboutUsProfileStyle.css';

export function AboutUsProfile(props){
    return(
        <div className='profile-container'>
            <img src={require(`../Images/${props.profile}.webp`)}></img>
            <p><b>{props.name}</b></p>
            <p>{props.profession}<br/>{props.position}<br/>{props.position_two}</p>
        </div>
    );
}