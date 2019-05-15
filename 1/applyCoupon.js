 item = {
  "name" : "Avocado",
  "type" : "Fruit",
  "category" : "Food",
  "price" : 200
}

function applyCoupon(i){
  return function(e){
    let newprice = i.price * (100-e)/100;
    const newitem = {"price" : newprice};
    return newitem;
}
}

console.log(applyCoupon(item)(10).price);