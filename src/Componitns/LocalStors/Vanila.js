

const getLS = () =>{
  const items = localStorage.getItem("cart");
  if(items){
    const convart = JSON.parse(items);
    return convart;
  }
  return [];
}

const stteas = (para) =>{
    const convt = JSON.stringify(para);
    localStorage.setItem("cart", convt);
}


const setLS = (id) =>{
    const gets = getLS();
    const newAdd = [...gets,id];
    stteas(newAdd);
}

export{getLS, setLS}