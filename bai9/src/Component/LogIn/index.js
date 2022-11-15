import './index.css';

export const Login = ({lang, setInfo, info}) =>{
    const handleClick = (e)=>{
        e.preventDefault();
        const name = document.getElementById('name').value;
        setInfo(name);
    }
    console.log(info);
    return (
        <div className='login'>
            <div className='form'>
            {
                info==='NULL'? (
                    <form>
                        <div>{lang.login}</div>
                        <input type='text' id='name' placeholder={lang.username} style={{margin: '1rem'}} />
                        <input type='submit' value={lang.login} onClick={handleClick} />
                    </form>
                ):(
                    <div class='welcome'>{lang.welcome} {info}</div>
                )
            }
            </div>
        </div>
    )
}