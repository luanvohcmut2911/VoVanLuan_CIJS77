const addBtn = document.getElementById("addButton");
const result = document.getElementById("info");
const arr = [];
const AddComponent = (name,phone,index)=>{
    const newBlock = document.createElement("li")
    newBlock.className="block";
    newBlock.setAttribute("key",index);
    newBlock.innerHTML = `<div class="Name">${name}</div><div class="Phone">${phone}</div>`;
    result.appendChild(newBlock);
    if(index==arr.length-1){
        setTimeout(()=>{
            newBlock.className = "show";
            result.className = "fade";
        },10);
    }
    else{
        newBlock.className = "show";
    }
}
addBtn.addEventListener("click",()=>{
    const nameValue = document.getElementById('nameValue').value;
    const phoneValue = document.getElementById("phoneValue").value;
    arr.push({
        phone: phoneValue,
        name: nameValue
    })
    arr.sort((a,b) => 
        (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : 
        ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0)
    )
    // Component(arr);
    result.innerHTML = '';
    arr.map((iter,index)=>{
        AddComponent(iter.name, iter.phone, index);
    })
})
const findBtn = document.getElementById('findButton');
findBtn.addEventListener('click',()=>{
    const searchArg = document.getElementById('search').value;
    if(searchArg==''){
       alert("Chưa nhập từ khóa");
    }
    else{
        let res = arr.filter(o=>o.name.toLowerCase().includes(searchArg.toLowerCase()));
        //re-render
        if(res!=undefined){
            result.innerHTML = '';
            res.map((iter,index)=>{
                AddComponent(iter.name, iter.phone, index);
            })
        }
    }
})
const replaceDuplicateBtn = document.getElementById("filter");
replaceDuplicateBtn.addEventListener('click',()=>{
    const arrPhoneNumber = [];
    arr.map((iter,index)=>{
        if(!arrPhoneNumber.includes(iter.phone)){
            arrPhoneNumber.push(iter.phone);
        }
        else {
            delete arr[index];
        }
    })
    //re-render
    result.className = "swing";
    console.log(result.innerHTML);
    result.innerHTML = '';
    arr.map((iter,index)=>{
        DeleteComponent(iter.name, iter.phone, index);
    })
})
const DeleteComponent = (name,phone,index)=>{
    const newBlock = document.createElement("li")
    result.className = '';
    newBlock.className="block";
    newBlock.setAttribute("key",index);
    newBlock.innerHTML = `<div class="Name">${name}</div><div class="Phone">${phone}</div>`;
    result.appendChild(newBlock);
    newBlock.className = "show";
}




