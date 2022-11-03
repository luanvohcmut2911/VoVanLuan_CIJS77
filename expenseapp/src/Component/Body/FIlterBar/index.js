import './index.css';

export const FilterBar = ({setYear}) =>{
    const years = [2021, 2022, 2023, 2024];
    const handleSelect = (e) =>{
        setYear(e.target.value);
        // setExpenseData([...expenseData]);
    }
    return (
        <div className = "filterBar" onChange={handleSelect}>
            <div className = "left">Filter by year</div>
            <select className = "right" >
                {
                    years.map((year, index)=>{
                        return <option key={index} value={year} >{year}</option>
                    })
                }
            </select>
        </div>
    )
}