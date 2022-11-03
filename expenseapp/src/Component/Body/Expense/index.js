import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faTrashCan } from '@fortawesome/free-solid-svg-icons'


export const Expense = ({expenseData, year, setExpenseData}) =>{
    return (
        <div className="detailBox">
        {
            expenseData.filter((d)=> d.date.year===year).map((eData, index)=>{
                const {date, price, type} = eData;
                const {day, month, year} = date;
                return (
                    <div className = 'expenseDetail'key={index} >
                        <div className="schedule">
                            <div style={{fontSize: '12px'}}>{month}</div>
                            <div style={{fontSize: '12px'}}>{year}</div>
                            <b style={{fontSize: '20px'}}>{day}</b>
                        </div>
                        <b style={{fontSize: '30px', color:'white'}}>{type}</b>
                        <div className='rightSide'>
                            <div className='price'>$ {parseInt(price)}</div>
                            <div style={{display: 'flex', flexDirection: 'column'}} className='icon'>
                                <FontAwesomeIcon icon={faGear} style={{marginBottom: '1rem'}} />
                                <FontAwesomeIcon icon={faTrashCan} onClick={()=>{
                                    alert ('deleted');
                                    // expenseData.filter((d)=> d.date.year===year).splice(index,1);
                                    setExpenseData(expenseData.filter((d)=>d!==eData));
                                }}/>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}