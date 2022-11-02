import './index.css';

export const Expense = ({expenseData}) =>{
    return (
        <div className="detailBox">
        {
            expenseData.map((eData, index)=>{
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
                        <div className='price'>$ {price}</div>
                    </div>
                )
            })
        }
        </div>
    )
}