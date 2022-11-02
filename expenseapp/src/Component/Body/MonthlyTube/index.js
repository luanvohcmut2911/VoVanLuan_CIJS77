import "./index.css";

export const MonthlyTube = ({data}) => {
  const dailyData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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
    "Dec",
  ];
  data.filter((d)=> d.date.year===2022 ).map((d)=>{
    return dailyData[d.date.monthID-1] += d.price;
  })
  console.log();
  return (
    <div className="MonthlyTube">
      {dailyData.map((daily, index) => {
        return (
          <div key={index}>
            <div className="barContainer">
              <div className="bar" style={{ height: `${daily}%` }}></div>
            </div>
            <div style={{marginTop: '1rem'}}>{month[index]}</div>
          </div>
        );
      })}
    </div>
  );
};
