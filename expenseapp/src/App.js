import './App.css';
import { Header } from './Component/Header';
import { Body } from './Component/Body';
import { useState } from 'react';

const App = () => {
  const [expenseData, setExpenseData] = useState([
    {
      date: {
          year: 2022,
          month: "January",
          monthID: 1,
          day: 16
      },
      price: 50,
      type: "Some book"
    },
    {
      date: {
          year: 2022,
          month: "October",
          monthID: 10,
          day: 10
      },
      price: 75,
      type: "Electricity bill"
    },
    {
      date: {
          year: 2022,
          month: "May",
          monthID: 5,
          day: 8
      },
      price: 100,
      type: "New bike"
    },
    {
      date: {
          year: 2021,
          month: "January",
          monthID: 1,
          day: 16
      },
      price: 50,
      type: "Reference book"
    },
    {
      date: {
          year: 2021,
          month: "October",
          monthID: 10,
          day: 10
      },
      price: 75,
      type: "Water bill"
    },
    {
      date: {
          year: 2021,
          month: "May",
          monthID: 5,
          day: 8
      },
      price: 100,
      type: "New bicycle"
    }
  ]);
  const [year, setYear] = useState(2021);
  return (
    <div className="App">
      <Header expenseData={expenseData} setExpenseData={setExpenseData} />
      <Body data={expenseData} year={year} setYear={setYear}  setExpenseData={setExpenseData} />
    </div>
  );
}

export default App;
