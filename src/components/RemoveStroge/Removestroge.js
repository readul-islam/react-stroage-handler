const removeStroge = (id)=>{
    let getItem = localStorage.getItem('product__qun__value');
    // console.log(getItem)
    // console.log(getItem)

    if(getItem){
      let  parseItem = JSON.parse(getItem)
        // console.log(parseItem)
        let value = parseItem[id];
        // console.log(value)
        if(value> 0){
            
            value = parseItem[id] -1;
            parseItem[id] =  value;
            
            localStorage.setItem('product__qun__value',JSON.stringify(parseItem))
            
        }
    }
    
    // console.log(converted)
    // let quan = getItem[id];
    // if(quan){
    //     const newQuan = quan - 1;
    //     getItem[id] = newQuan;
    
    // }
    
}



export{removeStroge};