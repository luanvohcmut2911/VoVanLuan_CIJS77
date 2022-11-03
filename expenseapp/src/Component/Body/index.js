import './index.css';
import { FilterBar } from './FIlterBar';
import { MonthlyTube } from './MonthlyTube';
import { Expense } from './Expense';

export const Body = ({data, year, setYear, setExpenseData}) =>{
    return (
        <div className = "body">
            <FilterBar className = "filter" setYear={setYear}/>
            <MonthlyTube data={data} year = {year}/>
            <Expense expenseData={data} year={year} setExpenseData={setExpenseData}/>
        </div>
    )
}