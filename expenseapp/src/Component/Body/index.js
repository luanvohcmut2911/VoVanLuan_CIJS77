import './index.css';
import { FilterBar } from './FIlterBar';
import { MonthlyTube } from './MonthlyTube';
import { Expense } from './Expense';

export const Body = ({data}) =>{
    return (
        <div className = "body">
            <FilterBar className = "filter" />
            <MonthlyTube data={data}/>
            <Expense expenseData={data} />
        </div>
    )
}