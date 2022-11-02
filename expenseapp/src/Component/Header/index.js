import './index.css';
import { Dialog } from '../AddDialog';
import { useState } from 'react';

export const Header = ({expenseData, setExpenseData}) =>{
    const [display, setDisplay] = useState('none');
    const handleClick = ()=>{
        if(display==='none') setDisplay('flex');
    }
    return (
        <div>
            <Dialog display={display} setDisplay={setDisplay} expenseData={expenseData} setExpenseData={setExpenseData}/>
            <div className = "header" style = {{display: `${display==='none'?'flex':'none'}`}}>
                <button className = "button" onClick={handleClick}>Add new expense</button>
            </div>
        </div>
    )
}