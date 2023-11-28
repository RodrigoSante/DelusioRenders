import './projectsContainerStyle.css'

export function ProjectsContainer(props){
    return(
        <div className='project-one'>
            <p><b>{props.houseName}</b></p>
            <p>{props.presentation}</p>
            <img src={require(`../Images/${props.image}.jpg`)}></img>
        </div>
    );
}