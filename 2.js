function is_name_valid(name){
    let pola = /^[A-Z ]{3,}$/;
    return pola.test(name);
}

function is_age_valid(age){
    let pola = /^[0-9]{2,2}$/;
    return pola.test(age);
}

function is_username_valid(username){
    let pola = /(^[a-z]{4,4})(.|_)([0-9]{3,3}$)/;
    return pola.test(username);
}

console.log(is_name_valid("TIARA"));
console.log(is_age_valid("22"));
console.log(is_username_valid("yani_333"));
console.log(is_username_valid("dian.11"));

