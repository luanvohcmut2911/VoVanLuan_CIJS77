import './index.css';

export const Dialog = ({display, setDisplay, expenseData, setExpenseData}) =>{
    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const handleSubmit = (e) => {
        e.preventDefault();
        const objDate={};
        const name = document.getElementById('name').value;
        const amount = document.getElementById('amount').value;
        const date = document.getElementById('date').value;
        var d = new Date( date );
        if ( !!d.valueOf() ) { // Valid date
            objDate.year = d.getFullYear();
            objDate.month = month[d.getMonth()];
            objDate.day = d.getDate();
            objDate.monthID = d.getMonth()+1;
        } 
        else { 
            console.error('Invalid date'); // Invalid
        }
        const regex= /^[0-9]+$/ ; 
        if(amount.match(regex) && date!==undefined && name !==undefined){
            setExpenseData([...expenseData, {
                date: objDate,
                price: amount,
                type: name
            }])
            alert('added successfully');
        }
        else {
            alert('please enter in correct format');
        }
    }
    const handleCancel = (e) => {
        e.preventDefault();
        setDisplay('none');
    }
    return (
        <form className = 'dialog' style= {{display: `${display}`}}>
            <div className = 'Input'>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter name here ..."/>
            </div>

            <div className = 'Input'>
                <label htmlFor="amount">Amount</label>
                <input type="text" id="amount" name="amount" placeholder="Enter amount here..."/>
            </div>

            <div className = 'Input'>
                <label htmlFor="date">Date</label>
                <input type='date' id= 'date' name='date' placeholder='dd/mm/yyyy' />          
            </div>      
            <div className="buttonOption">
                <input id='AddButton' type="submit" value="Add" onClick={handleSubmit}/>
                <input id='CancelButton' type='submit' value="Cancel" onClick={handleCancel}/>
            </div>
        </form>
    )
}