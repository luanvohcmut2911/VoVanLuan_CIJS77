import {useState, useEffect} from 'react';

export const CountText = ()=>{
    const [count, setCount] = useState(0);
    const [isType, setIsType] = useState(false);
    // useEffect(()=>{
    //     const input = document.getElementById('input');
    //     input.addEventListener('change',()=>{
    //         console.log('change');
    //     })
    // })
    const handleChange = (e)=>{
        const arr = e.target.value.split(' ');
        console.log(arr.filter(word => word !== '').length);
        setCount(arr.filter(word => word !== '').length);
    };
    useEffect(()=>{
        const previousText = document.getElementById('input').value;
        setTimeout(()=>{
            const input = document.getElementById('input').value;
            console.log(input);
            if(input===previousText) setIsType(false);
            else setIsType(true);
        }, 500);
        if(!isType){
            console.log('update');
            const inp = document.getElementById('input');
            inp.addEventListener('change', handleChange);
        }
    })
    return (
        <div>
            <input type='textarea' id='input' onChange={handleChange}/>
            <p>There are {count} words in the input area</p>
        </div>
    )
}