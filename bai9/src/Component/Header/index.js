import './index.css';
export const Header = ({lang, info}) =>{
    return (
        <div className = 'header'>
            <div>MindX</div>
            <div>{info==='NULL' ? lang.login: lang.welcome + info}</div>
        </div>
    )
}