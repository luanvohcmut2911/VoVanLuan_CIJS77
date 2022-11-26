
import './index.css';
import UserDefault from '../../Asset/UserDefault.png';



export const ActorDetailComponent = ({dataAPI}) => {
    const { name, image, country, birthday, gender } = dataAPI;
    let medium = '';
    if(image===null){
        medium = UserDefault;
    }
    else{ 
        medium = image.medium;
    }
    return (
        <div className = 'fullInfo'>
            <div className = 'Title'>
                <h1>{name}</h1>
            </div>
            <div className = 'underTitle'>
                <div className='LeftSide'>
                    <div className = 'infoLeft'>
                        <img className='poster' src = {medium} alt='' />
                    </div>
                </div>
                <div className = 'rightSide'>
                    <div className = 'infoRight'>
                        <div className='info'><h1>Personal Information</h1></div>
                        <div className = 'Gender'><b>Gender: </b> {gender}</div>
                        <div className = 'Birthday'><b>Birthday: </b> {birthday===null?'Unknown': birthday}</div>
                        <div className = 'BornIn'><b>Born in: </b> {country===null?'Unknown': country.name} ({country===null?'Unknown': country.code})</div> { /* ({code===null?'':code}) */ }
                    </div>
                </div>
            </div>
        </div>
    );
};