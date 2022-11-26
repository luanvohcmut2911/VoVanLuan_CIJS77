import {useNavigate} from 'react-router-dom';
import FilmDefault from '../../Asset/UserDefault.png';
import './index.css';

export const FilmCard = ({dataAPI}) => {
    const { name, image, id } = dataAPI;
    let medium = '';
    if(image===null||image.medium===null){
        medium = FilmDefault;
    }
    else{
        medium = image.medium;
    }
    const navigate = useNavigate();
    const handleClickButton = (ID)=>{
        navigate(`/shows/${ID}`);
    };
    return (
        <button type='button' className = 'part' onClick={()=>{
            handleClickButton(id);
        }}>

            <img className = 'image' src={medium} alt={name} />
            <div className = 'textDecor'>
                <p id='textCard'>{name}</p>
            </div>
        </button>
    );
};