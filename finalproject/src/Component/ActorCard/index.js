import { useNavigate } from 'react-router-dom';
import UserDefault from '../../Asset/UserDefault.png';
import './index.css';

export const ActorCard = ({dataAPI}) => {
    const { name, image, id } = dataAPI;
    let medium = '';
    if(image===null||image.medium===null){
        medium = UserDefault;
    }
    else{
        medium = image.medium;
    }
    const navigate = useNavigate();
    const handleClickButton = (ID)=>{
        navigate(`/actor/${ID}`);
    };
    return (
        // <Link href = '/' underline='none'>
            <button type='button' className = 'part' onClick={()=>{
                handleClickButton(id);
            }}>
                <img src={medium} alt={name} />
                <div className = 'textDecor'>
                    <p id='textCard'>{name}</p>
                </div>
            </button>
        // </Link>
    );
};