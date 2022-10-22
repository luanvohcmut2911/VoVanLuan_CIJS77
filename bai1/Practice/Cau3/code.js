const arr = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
const findMostDuplicate = (arr)=>{
    const arrSave = [];
    arr.map((iter)=>{
        if(!arrSave.includes(iter)) arrSave.push(iter);
    })
    let count = 0;
    let number = 0;
    arrSave.map((iter)=>{
        let countSave = 0;
        arr.map((iterArr)=>{
            if(iterArr==iter){
                countSave++;
            }
        })
        if(countSave>count) {
            count = countSave;
            number = iter;
        }
    })
    console.log(`{value: ${number}, count: ${count}}`);
}
findMostDuplicate(arr);