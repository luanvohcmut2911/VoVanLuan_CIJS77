import './Task.css';
// import { useState } from 'react';
const Description = ({props})=>{
    // const handleClick = (e)=>{
    //     console.log(e.target.value)
    // }
    // const [isChecked, setIsChecked] = useState(false);
    return (
        <div>
            <li><input type="radio" id="checkbox" />{props.title}</li>
        </div>
    )
}

export default Description;
