import "./index.css";
// import {useState} from 'react';
// import { useEffect, useRef } from "react";
export const MonthlyTube = ({data, year}) => {
  let dailyData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let maxDailyData = 0;
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  data.filter((d)=> d.date.year===parseInt(year) ).map((d)=>{
    return dailyData[d.date.monthID-1] += parseInt(d.price);
  });
  dailyData.map((d)=>{
    return ((maxDailyData<d) ? maxDailyData= d: 0)
  }) ;
  return (
    <div className="MonthlyTube">
      {dailyData.map((daily, index) => {
        return (
          <div key={index}>
            <div className="barContainer">
              <div className="bar" style={{ height: `${parseInt(maxDailyData)===0?0:daily/parseInt(maxDailyData)*100}%` }}></div>
            </div>
            <div style={{marginTop: '1rem'}}>{month[index]}</div>
          </div>
        );
      })}
    </div>
  );
};
