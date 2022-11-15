import './index.css';

export const Footer = ({setLanguageState})=>{
    return (
        <div className='footer'>
            <select className='selectCard' onChange={(e)=>{
                    setLanguageState(e.target.value)
            }}>
                <option id='1' value={'vietnamese'}>vi</option>
                <option id='2' value={'english'} >en</option>
                <option id='3' value={'japanese'}>jp</option>
            </select>
        </div>
    )
}