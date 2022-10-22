const arr = [1,2,3,5,4,2,6,4];
const reduceDuplicate = (arr)=>{
    const arrSave = [];
    arr.map((iter,index)=>{
        if(!arrSave.includes(iter)){
            arrSave.push(iter);
        }
        else {
            arr.splice(index,1);
        }
    })
    console.log(arr);
}
reduceDuplicate(arr);