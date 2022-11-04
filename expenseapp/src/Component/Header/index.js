import './index.css';
import { Dialog } from '../AddDialog';
import { useState } from 'react';

const Button = ({display, setDisplay}) => {
    const handleClick = ()=>{
        if(display==='none') setDisplay('flex');
    }
    return (
        <button className = "button" id='changeButton' onClick={handleClick}>Add new expense</button>
    )
}

export const Header = ({expenseData, setExpenseData}) =>{
    const [display, setDisplay] = useState('none');
    
    return (
        <div>
            <Dialog display={display} setDisplay={setDisplay} expenseData={expenseData} setExpenseData={setExpenseData}/>
            <div className = "header" style = {{display: `${display==='none'?'flex':'none'}`}}>
                <Button display={display} setDisplay={setDisplay} />
            </div>
        </div>
    )
}