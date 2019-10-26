function divideAndSort(number){
    var aNumber = number.toString().split(0);
    var oNumber = "";

    if(typeof number!="string" && number >= Number.MAX_SAFE_INTEGER){
        return "Please use string type data if you store more than " + Number.MAX_SAFE_INTEGER;
    }
    

    for(var i = 0; i < aNumber.length; i++){
        aNumber[i] = aNumber[i].split('');
        aNumber[i] = aNumber[i].sort();
        aNumber[i].forEach(element => {
            oNumber = oNumber + element;
        });
      }

    
    return oNumber;
}

console.log(divideAndSort(5956560159466056));