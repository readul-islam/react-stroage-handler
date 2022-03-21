

const addLocalStorage = (id) => {
  let localObject;

  const getItem = localStorage.getItem("product__qun__value");

  if (getItem) {
    localObject = JSON.parse(getItem);
  } else {
    localObject = {};
  }

  // console.log(converted)
  let quan = localObject[id];
        if (quan) {
    const newQuan = quan + 1;
    localObject[id] = newQuan;
    
  } else {
    localObject[id] = 1;
  }
  localStorage.setItem("product__qun__value", JSON.stringify(localObject));
};

export { addLocalStorage };
